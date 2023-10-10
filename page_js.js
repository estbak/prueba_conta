$(document).ready(function() {
    alert("¡Bienvenido a Contaline!");

    $("#ayuda").click(function() {
       // console.log("Haciendo clic en Ayuda"); // Mensaje de depuración
        var mensaje = "Bienvenid@ a Contaline! Por favor seleccione tipo de solicitud y el área deseada";
        
        $.ajax({
            type: "POST",
            url: "page_proc.asp", 
            data: { mensaje: mensaje, accion: "ayuda" }, // Datos que se enviarán al servidor
            success: function(respuesta) {
                alert(respuesta);
            },
            error: function() {
                alert("Hubo un error al hacer la solicitud.");
            }
        });
    });

    $.ajax({
        type: "POST",
        url: "page_proc.asp",
        data: { obtenerHora: true, accion: "cargar" }, // Envía un parámetro adicional para obtener la hora
        success: function(hora) {
            // Muestra la hora en un alert al cargar la página
            alert("Hora del servidor al cargar la página: " + hora);
        },
        error: function() {
            alert("Hubo un error al obtener la hora al cargar la página.");
        }
    });


});


