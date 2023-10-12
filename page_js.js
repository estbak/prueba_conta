$(document).ready(function() {
    alert("¡Bienvenid@ a Contaline!");
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
            
            var tablaDiv = $("<div>");
            tablaDiv.attr("id", "tablaContainer");
            
            var tablaHTML = "<table class='table table-bordered'>";
            tablaHTML += "<thead class='thead-dark'><tr><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th><th>Columna 4</th><th>Columna 5</th><th>Columna 6</th><th>Columna 7</th></tr></thead>";
            tablaHTML += "<tbody>";
            
            for (var i = 1; i <= 3; i++) {
                tablaHTML += "<tr>";
                for (var j = 1; j <= 7; j++) {
                    if (j === 1) {
                        tablaHTML += "<td>" + i + "</td>";
                    } else {
                        tablaHTML += "<td></td>";
                    }
                }
                tablaHTML += "</tr>";
            }
            
            tablaHTML += "</tbody></table>";

            tablaDiv.html(tablaHTML);
            
            $("#tablaContainer").replaceWith(tablaDiv);

            // Agregar 7 filas
            $.ajax({
                type: "POST",
                url: "page_proc.asp", 
                data: { accion: "obtenerFilas" }, 
                success: function(filas) {
                   
                    $("#tablaContainer tbody").append(filas);

                    $("#tablaContainer tbody tr").each(function() {
                        $(this).find("td:eq(6)").html("<button class='btn btn-warning btn-show-row'>Mostrar Fila</button>");
                    });

                    $(".btn-show-row").click(function() {
                        var numeroFila = $(this).closest("tr").find("td:first").text();
                        alert("Número de Fila: " + numeroFila);
                    });
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


