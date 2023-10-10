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
        },
        error: function() {
            alert("Hubo un error al obtener la hora al cargar la página.");
        }
    });
});
