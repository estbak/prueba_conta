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
ElseIf accion = "obtenerOpciones" Then
    Dim opciones
    opciones = "<option value='opcion1'>Reclamo</option>"
    opciones = opciones & "<option value='opcion2'>Agradecimiento</option>"
    opciones = opciones & "<option value='opcion3'>Sugerencia</option>"
        
    Response.Write opciones
ElseIf accion = "obtenerFilas" Then
    Dim filas
    Dim contador
    contador = 4
    While contador <= 10 ' Generar 7 filas
        filas = filas & "<tr>"
        Dim j
        j = 1
        While j <= 7 ' Generar 7 columnas en cada fila
            If j = 1 Then
                filas = filas & "<td>" & contador & "</td>" ' Mostrar el número de fila en la primera columna
            Else
                filas = filas & "<td></td>" ' Las otras columnas están vacías
            End If
            j = j + 1
        Wend
        filas = filas & "</tr>"
        contador = contador + 1
    Wend
    
    Response.Write filas
End If

horaActual = Time

If accion = "cargar" Then
    Response.Write horaActual
Else 
    Response.Write ""
End If
%>
