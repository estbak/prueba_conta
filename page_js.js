$(document).ready(function() {
    alert("¡Bienvenido a Contaline!");
    var opcionesCargadas = false;

    $("#ayuda").click(function() {
        var mensaje = "Bienvenid@ a Contaline! Por favor seleccione tipo de solicitud y el área deseada";
        
        $.ajax({
            type: "POST",
            url: "page_proc.asp", 
            data: { mensaje: mensaje, accion: "ayuda" },
            success: function(respuesta) {
                alert(respuesta);
                if (!opcionesCargadas) {
                   $.ajax({
                        type: "POST",
                        url: "page_proc.asp", 
                        data: { accion: "obtenerOpciones" }, 
                        success: function(opciones) {
                            $("#miSelect").append(opciones); 
                            opcionesCargadas = true;
                        },
                        error: function() {
                            alert("Hubo un error al obtener las opciones.");
                        }
                    }); 
                }
                
            },
            error: function() {
                alert("Hubo un error al hacer la solicitud.");
            }
        });
    });

    $.ajax({
        type: "POST",
        url: "page_proc.asp",
        data: { obtenerHora: true, accion: "cargar" },
        success: function(hora) {
            alert("Hora del servidor al cargar la página: " + hora);
            
            // Crear un nuevo div para la tabla
            var tablaDiv = $("<div>");
            tablaDiv.attr("id", "tablaContainer"); // Asignar un ID al div
            
            // Crear la tabla HTML con clases de Bootstrap
            var tablaHTML = "<table class='table table-bordered'>";
            tablaHTML += "<thead class='thead-dark'><tr><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th><th>Columna 4</th><th>Columna 5</th><th>Columna 6</th><th>Columna 7</th></tr></thead>";
            tablaHTML += "<tbody>";
            
            // Agregar filas
            for (var i = 1; i <= 3; i++) {
                tablaHTML += "<tr>";
                for (var j = 1; j <= 7; j++) {
                    tablaHTML += "<td>Fila " + i + ", Columna " + j + "</td>";
                }
                tablaHTML += "</tr>";
            }
            
            tablaHTML += "</tbody></table>";

            // Agregar la tabla al div
            tablaDiv.html(tablaHTML);
            
            // Reemplazar el contenido del div existente con el nuevo
            $("#tablaContainer").replaceWith(tablaDiv);

            // Agregar 7 filas
            $.ajax({
                type: "POST",
                url: "page_proc.asp", 
                data: { accion: "obtenerFilas" }, 
                success: function(filas) {
                    $("#tablaContainer tbody").append(filas); 
                },
                error: function() {
                    alert("Hubo un error al obtener las filas.");
                }
            }); 
        },
        error: function() {
            alert("Hubo un error al obtener la hora al cargar la página.");
        }
    });

});

