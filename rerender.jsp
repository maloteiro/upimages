<%@ taglib prefix='wi' uri='/wi'%>
<wi:if test="|wi.page.parent|=">
<script src='/<wi:out var="wi.proj.id"/>/js/rerender.js' type='text/javascript'></script>
<script>
var pageRerender = '<wi:out var="wi.page.id"/>';
var areasRerender = '<wi:out var="tmp.rerender"/>';
if (areasRerender != "") {
  onload = rerenderResponse;
}
</script>
<wi:if test="|tmp.ajax_rerender|!=true">
<iframe name="rerender_iframe" id="rerender_iframe" src="" style="display:none"></iframe>
</wi:if>
</wi:if>
