<%@ page info='Project'
  language='java' session='true' 
%><%@ taglib
  prefix='w' uri='/wicore'
%><w:initProject/><jsp:useBean
  id="project" type="br.com.webinside.runtime.component.Project"
/><jsp:setProperty
  name="project" property="title" value="Upload de Imagens"
/><jsp:setProperty
  name="project" property="version" value="5.0.17"
/><jsp:setProperty
  name="project" property="requestScope" value="false"
/><w:addProjectProperty
  type="InitParam" name="grid.linkIndexSize" value="10"
/><w:addProjectProperty
  type="Function" name="DateFormat" value="br.com.webinside.runtime.function.DateFormat"
/><w:addProjectProperty
  type="Function" name="DecodeDES" value="br.com.webinside.runtime.function.DecodeDES"
/><w:addProjectProperty
  type="Function" name="df" value="br.com.webinside.runtime.function.DateFormat"
/><w:addProjectProperty
  type="Function" name="EncodeDES" value="br.com.webinside.runtime.function.EncodeDES"
/><w:addProjectProperty
  type="Function" name="EncodeMD5" value="br.com.webinside.runtime.function.EncodeMD5"
/><w:addProjectProperty
  type="Function" name="EncodeSHA1" value="br.com.webinside.runtime.function.EncodeSHA1"
/><w:addProjectProperty
  type="Function" name="Eval" value="br.com.webinside.runtime.function.Eval"
/><w:addProjectProperty
  type="Function" name="ExtractPassword" value="br.com.webinside.runtime.function.ExtractPassword"
/><w:addProjectProperty
  type="Function" name="fc" value="br.com.webinside.runtime.function.FileCopy"
/><w:addProjectProperty
  type="Function" name="FileCopy" value="br.com.webinside.runtime.function.FileCopy"
/><w:addProjectProperty
  type="Function" name="GenericFormat" value="br.com.webinside.runtime.function.GenericFormat"
/><w:addProjectProperty
  type="Function" name="gf" value="br.com.webinside.runtime.function.GenericFormat"
/><w:addProjectProperty
  type="Function" name="HasRole" value="br.com.webinside.runtime.function.HasRole"
/><w:addProjectProperty
  type="Function" name="HtmlFilter" value="br.com.webinside.runtime.function.HtmlFilter"
/><w:addProjectProperty
  type="Function" name="If" value="br.com.webinside.runtime.function.If"
/><w:addProjectProperty
  type="Function" name="In" value="br.com.webinside.runtime.function.In"
/><w:addProjectProperty
  type="Function" name="Include" value="br.com.webinside.runtime.function.Include"
/><w:addProjectProperty
  type="Function" name="md5" value="br.com.webinside.runtime.function.EncodeMD5"
/><w:addProjectProperty
  type="Function" name="Mkdir" value="br.com.webinside.runtime.function.Mkdir"
/><w:addProjectProperty
  type="Function" name="nf" value="br.com.webinside.runtime.function.NumberFormat"
/><w:addProjectProperty
  type="Function" name="nl" value="br.com.webinside.runtime.function.NumberList"
/><w:addProjectProperty
  type="Function" name="NumberFormat" value="br.com.webinside.runtime.function.NumberFormat"
/><w:addProjectProperty
  type="Function" name="NumberList" value="br.com.webinside.runtime.function.NumberList"
/><w:addProjectProperty
  type="Function" name="OrderBy" value="br.com.webinside.runtime.function.OrderBy"
/><w:addProjectProperty
  type="Function" name="Piece" value="br.com.webinside.runtime.function.Piece"
/><w:addProjectProperty
  type="Function" name="Random" value="br.com.webinside.runtime.function.Random"
/><w:addProjectProperty
  type="Function" name="SecureVar" value="br.com.webinside.runtime.function.SecureVar"
/><w:addProjectProperty
  type="Function" name="sha1" value="br.com.webinside.runtime.function.EncodeSHA1"
/><w:addProjectProperty
  type="Function" name="sv" value="br.com.webinside.runtime.function.SecureVar"
/><w:addProjectProperty
  type="Function" name="SVList" value="br.com.webinside.runtime.function.SVList"
/><w:addProjectProperty
  type="Function" name="TextFormat" value="br.com.webinside.runtime.function.TextFormat"
/><w:addProjectProperty
  type="Function" name="tf" value="br.com.webinside.runtime.function.TextFormat"
/><w:addProjectProperty
  type="Function" name="WebResource" value="br.com.webinside.runtime.function.WebResource"
/><w:addProjectProperty
  type="Function" name="wr" value="br.com.webinside.runtime.function.WebResource"
/>