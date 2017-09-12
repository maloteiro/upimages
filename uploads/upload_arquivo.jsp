<%@ page info='Upload Element'
  language='java' session='true' 
%><%@ taglib
  prefix='w' uri='/wicore'
%><%@ taglib
  prefix='wi' uri='/wi'
%><%@ taglib
  prefix='tag' tagdir='/WEB-INF/tags'
%><w:setProjectElement
  type="UploadLocal" name="upload_upload_arquivo"
/><jsp:useBean
  id="upload_upload_arquivo" type="br.com.webinside.runtime.component.UploadLocal"
/><jsp:setProperty
  name="upload_upload_arquivo" property="createDir" value="ON"
/><jsp:setProperty
  name="upload_upload_arquivo" property="description" value="Upload Local: upload_arquivo"
/><jsp:setProperty
  name="upload_upload_arquivo" property="directory" value="/|wi.proj.path|/arquivos/"
/><jsp:setProperty
  name="upload_upload_arquivo" property="file" value="|tmp.arquivo|"
/><jsp:setProperty
  name="upload_upload_arquivo" property="formField" value="tmp.arquivo"
/>