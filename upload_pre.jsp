<%@ page info='Pre-Page Elements'
  language='java' session='true' 
%><%@ taglib
  prefix='c' uri='http://java.sun.com/jsp/jstl/core'
%><%@ taglib
  prefix='fmt' uri='http://java.sun.com/jsp/jstl/fmt'
%><%@ taglib
  prefix='tiles' uri='http://tiles.apache.org/tags-tiles'
%><%@ taglib
  prefix='w' uri='/wicore'
%><%@ taglib
  prefix='wi' uri='/wi'
%><%@ taglib
  prefix='tag' tagdir='/WEB-INF/tags'
%><w:initPage/><w:setPageElement
  type="UploadRef" name="upload1"
/><jsp:useBean
  id="upload1" type="br.com.webinside.runtime.component.UploadRef"
/><jsp:setProperty
  name="upload1" property="condition" value="true"
/><jsp:setProperty
  name="upload1" property="description" value="Upload: upload_arquivo"
/><jsp:setProperty
  name="upload1" property="id" value="upload_arquivo"
/><jsp:setProperty
  name="upload1" property="type" value="LOCAL"
/><w:executeCore
  type="Upload" name="upload1"
/><w:endPage/>