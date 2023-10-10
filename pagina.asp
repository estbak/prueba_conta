<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto Entrenamiento Contaline</title>

    <!-- CSS de Bootstrap (Estable) -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-primary">
    <div class="container mt-5">
        <h1 class="mb-4">Formulario Contaline</h1>
        
        <form>
   
            <div class="mb-3">
                <label for="miSelect" >Tipo de Solicitud:</label>
                <select class="form-select" id="miSelect" name="miSelect">
                    <option value="default" disabled selected>&#10048; Seleccione una opción &#10048;</option>
                </select>
            </div>
   
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" name="nombre">
            </div>
            

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="miCheckbox" name="miCheckbox">
                <label class="form-check-label" for="miCheckbox">Soy cliente Contaline</label>
            </div>
            

            <div class="mb-3">
                <label class="form-label">Seleccione un área:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="miRadio" id="contabilidad" value="contabilidad">
                    <label class="form-check-label" for="contabilidad">Contabilidad</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="miRadio" id="rrhh" value="rrhh">
                    <label class="form-check-label" for="rrhh">RRHH</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="miRadio" id="ti" value="ti">
                    <label class="form-check-label" for="ti">TI</label>
                </div>
            </div>
            
            <div class="mb-3">
                <label for="miTextarea" class="form-label">Comentarios:</label>
                <textarea class="form-control" id="miTextarea" name="miTextarea" rows="4" cols="50"></textarea>
            </div>
            
            <div class="mb-3">
                <button class="btn btn-success" id="enviar" type="button">Enviar</button>
                <button class="btn btn-warning" id="ayuda" type="button">Ayuda</button>
                <button class="btn btn-danger" id="resetear" type="button">Resetear</button>
            </div>
        </form>
    </div>

    <!-- JavaScript de jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- JavaScript de Popper.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <!-- JavaScript de Bootstrap (Estable) -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="page_js.js"></script>
</body>
</html>