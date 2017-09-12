<% response.setStatus(HttpServletResponse.SC_OK); %>
<html><body>
<h3>
<%= request.getAttribute("javax.servlet.error.message") %>
</h3>
</body></html>
