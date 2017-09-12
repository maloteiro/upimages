/*
 * WEBINSIDE - Ferramenta de produtividade Java
 * Copyright (c) 2011-2012 LINEWEB Solu��es Tecnol�gicas Ltda.
 * Copyright (c) 2009-2010 Inc�gnita Intelig�ncia Digital Ltda.
 *
 * Este programa � software livre; voc� pode redistribu�-lo e/ou modific�-lo 
 * sob os termos da GNU LESSER GENERAL PUBLIC LICENSE (LGPL) conforme publicada 
 * pela Free Software Foundation; vers�o 2.1 da Licen�a.
 * Este programa � distribu�do na expectativa de que seja �til, por�m, SEM 
 * NENHUMA GARANTIA; nem mesmo a garantia impl�cita de COMERCIABILIDADE OU 
 * ADEQUA��O A UMA FINALIDADE ESPEC�FICA.
 * 
 * Consulte a GNU LGPL para mais detalhes.
 * Voc� deve ter recebido uma c�pia da GNU LGPL junto com este programa; se n�o, 
 * veja em http://www.gnu.org/licenses/ 
 */

function rerenderWIGrid(grid, pos) {
  submitWIGrid(grid, pos, true);
}

function submitWIGrid(grid, pos, rerender) {
  var form = document.forms['wiFormGridNav'];
  if (!form) return;
  if ((typeof userWIGrid) == 'function') {
    userWIGrid(grid, form);
  }
  var userWIGridName = grid.replace("grid.","");
  userWIGridName = userWIGridName.substring(0,1).toUpperCase() +
                   userWIGridName.substring(1, userWIGridName.length);
  userWIGridName = "userWIGrid" + userWIGridName;
  if (document.getElementById(userWIGridName)) {
    var userWIGridFunc = eval(userWIGridName);
    if ((typeof userWIGridFunc) == 'function') {
      userWIGridFunc(grid, form);
    }
  }	
  getFormHidden(form,grid.toLowerCase()+'.next').value = pos;
  if (rerender) {
    var rerenderDiv = "";
    if (form["grid.rerender"]) {
      rerenderDiv = "," + form["grid.rerender"].value;
    }
    if (form[grid + ".rerender"]) {
      rerenderDiv += "," + form[grid + ".rerender"].value;
    }
    var fgrid = grid.replace("grid.","form.");
	if (document.getElementById(fgrid)) {
	  grid = fgrid;
	}
    rerenderSubmit(form, grid + rerenderDiv);
  } else {
    form.submit();
  }
}

function getFormHidden(form, name) {
	var input = form[name];
	if (!input) {
		var ie = navigator.userAgent.indexOf('MSIE') > -1;
		if (navigator.userAgent.indexOf('MSIE 9') > -1) ie = false;
		if (ie) {
			input = document.createElement("<INPUT name='" + name + "'>");
		} else {
			input = document.createElement("INPUT");
			input.name = name;
		}
		input.type = 'hidden';
		form.appendChild(input);
	}
	return input;
}
