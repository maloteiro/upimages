/*
 * WEBINSIDE - Ferramenta de produtividade Java
 * Copyright (c) 2011-2012 LINEWEB Soluções Tecnológicas Ltda.
 * Copyright (c) 2009-2010 Incógnita Inteligência Digital Ltda.
 *
 * Este programa é software livre; você pode redistribuí-lo e/ou modificá-lo 
 * sob os termos da GNU LESSER GENERAL PUBLIC LICENSE (LGPL) conforme publicada 
 * pela Free Software Foundation; versão 2.1 da Licença.
 * Este programa é distribuído na expectativa de que seja útil, porém, SEM 
 * NENHUMA GARANTIA; nem mesmo a garantia implícita de COMERCIABILIDADE OU 
 * ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA.
 * 
 * Consulte a GNU LGPL para mais detalhes.
 * Você deve ter recebido uma cópia da GNU LGPL junto com este programa; se não, 
 * veja em http://www.gnu.org/licenses/ 
 */

// Variaveis para controle do usuario
var rerenderActive = false;
var rerenderDebug = false;
var rerenderCheckTime = 10000;
var disableActiveAlert = false;
var disableRefreshTokenWI = false;
// Variaveis para controle interno
var rerenderCount = 1;
// Variaveis com referencias a objetos
var linkRerender;
var formRerender;
// Variaveis com valores anteriores
var hrefRerender;
var targetRerender;
var prevRerender;
var actionRerender;
var tmpRerender;

function isRerenderFrame() {
  return parent.frames['rerender_iframe'] == self;
}

function rerenderLink(link, rerender, action, doPos, msg) {
  if (msg != null) {
    if (!confirm(msg)) return false;
  }
  if (rerenderActive) {
    if (!disableActiveAlert) {
      rerenderAlert("Rerender em processamento no momento.");
    }
    disableActiveAlert = false;
    return false;
  }
  disableActiveAlert = false;
  if (linkRerender != null || formRerender != null) return false;
  if ((typeof link) == 'string') {
    link = document.getElementById(link);
  }
  rerenderIndicator('block');
  linkRerender = link;
  hrefRerender = link.href;
  targetRerender = link.target;
  if (link.href.indexOf('?') == -1) {
    link.href += '?';
  } else {
    link.href += '&';
  }
  link.href += 'tmp.rerender=' + rerender;
  if (doPos) {
    link.href += '&wi.page.prev=' + pageRerender;
  }		  
  if (action != null) {
    link.href += '&tmp.action=' + action;
  }
  link.target = "rerender_iframe";
  setTimeout("restoreRerenderForm()", 500);
  rerenderCount += 1;
  setTimeout("rerenderCheckError(" + rerenderCount + ")" , rerenderCheckTime);
}

function rerenderSubmit(form, rerender, action, doPos, msg) {
  if (msg != null) {
    if (!confirm(msg)) return false;
  }
  if (rerenderActive) {
    if (!disableActiveAlert) {
      rerenderAlert("Rerender em processamento no momento.");
    }
    disableActiveAlert = false;
    return false;
  }
  disableActiveAlert = false;
  if (linkRerender != null || formRerender != null) return false;
  if ((typeof form) == 'string') {
    form = document.getElementById(form);
  }
  rerenderIndicator('block');
  formRerender = form;
  targetRerender = form.target;
  if (doPos == false && prevRerender == null) {
    prevRerender = form['wi.page.prev'].value;
    form['wi.page.prev'].value = "";
  }		  
  if (action != null && actionRerender == null) {
    actionRerender = action;
    form['tmp.action'].value = action;
  }
  tmpRerender = document.createElement("input");
  tmpRerender.setAttribute("type", "hidden");
  tmpRerender.setAttribute("name", "tmp.rerender");
  tmpRerender.setAttribute("value", rerender);
  formRerender.appendChild(tmpRerender);
  formRerender.target = "rerender_iframe";
  formRerender.submit();
  setTimeout("restoreRerenderForm()", 500);
  rerenderCount += 1;
  setTimeout("rerenderCheckError(" + rerenderCount + ")" , rerenderCheckTime);
}

function restoreRerenderForm() {
  try {
    // Fica num try para evitar erro quando o link 
    // tambem eh re-renderizado. 
    linkRerender.target = targetRerender;
    linkRerender.href = hrefRerender;
  } catch (err) { }
  try {
    // Fica num try para evitar erro quando o formulario 
    // tambem eh re-renderizado.
    // No FORM é obrigatório que o target venha primeiro.
    formRerender.target = targetRerender;
    formRerender.removeChild(tmpRerender);
    if (prevRerender != null) {
      formRerender['wi.page.prev'].value = prevRerender;
    }
    if (actionRerender != null) {
      formRerender['tmp.action'].value = "";
    }
    try {
      formRerender['tmp.internalaction'].value = "";
    } catch (err) { } 
  } catch (err) { }
  linkRerender = null;
  formRerender = null;
  hrefRerender = null;
  targetRerender = null;
  prevRerender = null;
  actionRerender = null;
}

function rerenderResponse() {
  var gridNav = false;
  var rerenders = areasRerender.split(",");
  for (i = 0; i < rerenders.length; i++) {
    var aux = rerenders[i].trim(); 
    if (aux.indexOf('form.') == 0) gridNav = true; 
	if (aux.indexOf('grid.') == 0) gridNav = true;
    rerenderArea(aux);
  }
  if (gridNav) rerenderArea('wiGridNav');
  rerenderOnCompleteDispatcher('refreshTokenWI');
  rerenderIndicator('none');
  rerenderOnCompleteDispatcher('');
  for (i = 0; i < rerenders.length; i++) {
    rerenderOnCompleteDispatcher(rerenders[i].trim());
  }
}

function rerenderArea(rerender) {
  var component = document.getElementById(rerender);
  if (component) {
    var content = component.innerHTML;
    var target = parent.document.getElementById(rerender);
    if (target) target.innerHTML = content;
  }
}

function rerenderOnCompleteDispatcher(rerender) {
  try {
    if (rerender == '') {
      parent.rerenderOnComplete();
    } else {
      var name = rerender.substring(0,1).toUpperCase() +
                 rerender.substring(1, rerender.length);
      parent['rerenderOnComplete' +name]();
    }
  } catch (err) { }
}

function rerenderIndicator(type) {
  if (type == 'block') {
    rerenderActive = true;
    var indicator = document.getElementById('rerenderIndicator');
    if (indicator) {
      indicator.style.display = 'block';
    }
    if (rerenderDebug) {
      var ifrm = document.getElementById("rerender_iframe");
      ifrm.style.display = 'block';
      ifrm.style.width = '100%';
    } 
  } 
  if (type == 'none') {
    var indicator = parent.document.getElementById('rerenderIndicator');
    if (indicator) {
      indicator.style.display = 'none';
    }
    parent.disableRefreshTokenWI = false;	
    parent.rerenderActive = false;
  } 
}

function rerenderCheckError(count) {
  if (rerenderCount == count) {
    if ((typeof frames['rerender_iframe'].rerenderActive) != 'boolean') {
      rerenderAlert("Ocorreu um erro ao processar o rerender.");
      rerenderIndicator('none');
    }
  }
}

function rerenderOnCompleteRefreshTokenWI() {
  if (disableRefreshTokenWI) return;
  var frmDocument = window.rerender_iframe.document;
  var frmInputs = frmDocument.getElementsByName("wi.token");
  if (frmInputs == null) return;
  var inputs = document.getElementsByName("wi.token");
  if (inputs == null) return;
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].value = frmInputs[0].value;
  }
}

function rerenderAlert(msg) {
  if ((typeof alertMsg) == 'function') {
	alertMsg(msg);
  } else {
    alert(msg)
  }
}

String.prototype.trim = function() {
  return this.replace(/^\s*/, "").replace(/\s*$/, "");
}