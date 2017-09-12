<%@ taglib prefix='wi' uri='/wi' %>
<wi:produce compact="true">
<%@ taglib prefix='tag' tagdir='/WEB-INF/tags' %>
<%@ attribute name="name" required="true" %>
<%@ attribute name="label" required="false" %>

<wi:set var="tmp.tag_label" value="${label}" scope="wi" />
<wi:if test="|tmp.tag_label|!=">
${label}<br/>
</wi:if>
<input type="text" id="${name}" name="${name}" value="|${name}|"/>
<br/>
<jsp:doBody/>

</wi:produce>
