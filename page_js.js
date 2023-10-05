$(document).ready(function() {
    alert("¡Bienvenido a Contaline!");

    $("#ayuda").click(function() {
        var mensaje = "Bienvenid@ a Contaline! Por favor seleccione tipo de solicitud y el área deseada";
        // Realiza una solicitud AJAX GET
        $.ajax({
            type: "GET",
            url: "page_proc.asp", 
            data: { mensaje: mensaje }, // Datos que se enviarán al servidor
            success: function(respuesta) {
                // Función que se ejecuta cuando la solicitud es exitosa
                alert("Respuesta del servidor: " + respuesta);
            },
            error: function() {
                alert("Hubo un error al hacer la solicitud.");
            }
        });
    });
});
