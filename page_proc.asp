<%@ Language=VBScript %>

    <%
        Dim mensaje
        Dim accion
        Dim horaActual

        mensaje = Request.Form("mensaje")
        accion = Request.Form("accion")

        If accion = "ayuda" Then
            If mensaje <> "" Then
                Response.Write mensaje
            Else
                Response.Write "no se ve"
            End If
        Else
             Response.Write ""
        End If


        horaActual = Time

        If accion = "cargar" Then
             Response.Write horaActual
        Else 
             Response.Write ""
        End If
    %>


    
