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
    contador = 1
    While contador <= 7 ' Generar 7 filas
        filas = filas & "<tr>"
        Dim j
        j = 1
        While j <= 7 ' Generar 7 columnas en cada fila
            filas = filas & "<td>Fila Nueva " & contador & ", Columna " & j & "</td>"
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
