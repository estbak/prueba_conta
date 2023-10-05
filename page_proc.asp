<%@ Language=VBScript %>
<html>
<head>
    <title>Página de Proceso ASP</title>
</head>
<body>
    <%
        Dim mensaje
        mensaje = Request.QueryString("mensaje")

        If mensaje <> "" Then
            ' Imprime el mensaje recibido en la respuesta
            Response.Write mensaje
        Else
            Response.Write "No se recibió ningún mensaje."
        End If
    %>
</body>
</html>
