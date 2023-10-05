<%@ Language=VBScript %>
    <%
        Dim mensaje
        mensaje = Request.QueryString("mensaje")

        If mensaje <> "" Then
            Response.Write mensaje
        Else
            Response.Write "No se recibió ningún mensaje"
        End If
    %>








