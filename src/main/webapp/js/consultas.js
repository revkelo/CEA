document.getElementById("selectConsulta").addEventListener("change", function () {
    var seleccion = parseInt(this.value);
    var descripcion = obtenerDescripcion(seleccion);
    document.getElementById("descripcionConsulta").innerHTML = "<p>" + descripcion + "</p>";
});

function obtenerDescripcion(consulta) {
    // Aquí puedes definir las descripciones de cada consulta
    switch (consulta) {
        case 1:
            return "Descripción de la Consulta 1";
        case 2:
            return "Descripción de la Consulta 2";
        case 3:
            return "Descripción de la Consulta 3";
        case 4:
            return "Descripción de la Consulta 4";
        case 5:
            return "Descripción de la Consulta 5";
        case 6:
            return "Descripción de la Consulta 6";
        case 7:
            return "Descripción de la Consulta 7";
        case 8:
            return "Descripción de la Consulta 8";
        case 9:
            return "Descripción de la Consulta 9";
        case 10:
            return "Descripción de la Consulta 10";
        default:
            return "No se encontró la descripción de la consulta";
    }
}

document.getElementById("btnEnviar").addEventListener("click", function () {
    var seleccion = parseInt(document.getElementById("selectConsulta").value);
    switch (seleccion) {
        case 1:
            var url = "http://localhost:8081/vehiculo";
            var titulonombre = "vehiculo";
            crearPaginaHTML(url, titulonombre);
            alert("Ejecutar acción para Consulta 1");
            break;
        case 2:
            alert("Ejecutar acción para Consulta 2");
            break;
        case 3:
            alert("Ejecutar acción para Consulta 3");
            break;
        case 4:
            alert("Ejecutar acción para Consulta 4");
            break;
        case 5:
            alert("Ejecutar acción para Consulta 5");
            break;
        case 6:
            alert("Ejecutar acción para Consulta 6");
            break;
        case 7:
            alert("Ejecutar acción para Consulta 7");
            break;
        case 8:
            alert("Ejecutar acción para Consulta 8");
            break;
        case 9:
            alert("Ejecutar acción para Consulta 9");
            break;
        case 10:
            alert("Ejecutar acción para Consulta 10");
            break;
        default:
            alert("No se seleccionó ninguna consulta");
    }
});


function crearPaginaHTML(url, titulonombre) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Crear un nuevo documento HTML
            var nuevoDocumento = document.implementation.createHTMLDocument('Nueva Página');

            // Agregar el enlace al CSS de Bootstrap
            var bootstrapCSS = nuevoDocumento.createElement('link');
            bootstrapCSS.rel = 'stylesheet';
            bootstrapCSS.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
            nuevoDocumento.head.appendChild(bootstrapCSS);

            // Crear un título para la página con Bootstrap class
            var titulo = nuevoDocumento.createElement('h1');
            titulo.textContent = titulonombre;
            titulo.classList.add('display-4', 'text-center', 'mt-5');
            nuevoDocumento.body.appendChild(titulo);

            // Crear una tabla con Bootstrap class
            var tabla = nuevoDocumento.createElement('table');
            tabla.classList.add('table', 'table-striped');

            // Crear el encabezado de la tabla con Bootstrap class
            var encabezado = nuevoDocumento.createElement('thead');
            encabezado.classList.add('thead-dark');
            var encabezadoFila = nuevoDocumento.createElement('tr');
            for (var clave in data[0]) {
                var encabezadoCelda = nuevoDocumento.createElement('th');
                encabezadoCelda.textContent = clave;
                encabezadoFila.appendChild(encabezadoCelda);
            }
            encabezado.appendChild(encabezadoFila);
            tabla.appendChild(encabezado);

            // Crear el cuerpo de la tabla
            var cuerpoTabla = nuevoDocumento.createElement('tbody');
            data.forEach(function (filaDatos) {
                var fila = nuevoDocumento.createElement('tr');
                for (var clave in filaDatos) {
                    var celda = nuevoDocumento.createElement('td');
                    celda.textContent = filaDatos[clave];
                    fila.appendChild(celda);
                }
                cuerpoTabla.appendChild(fila);
            });
            tabla.appendChild(cuerpoTabla);

            // Agregar la tabla al cuerpo del documento
            nuevoDocumento.body.appendChild(tabla);

            // Crear un enlace para descargar la página como archivo HTML
            var enlaceDescarga = nuevoDocumento.createElement('a');
            enlaceDescarga.href = URL.createObjectURL(new Blob([nuevoDocumento.documentElement.outerHTML], { type: 'text/html' }));
            enlaceDescarga.download = 'tabla_datos.html';
            enlaceDescarga.textContent = 'Descargar esta tabla como archivo HTML';
            enlaceDescarga.classList.add('btn', 'btn-primary', 'btn-lg', 'mt-3', 'd-block', 'mx-auto');
            nuevoDocumento.body.appendChild(enlaceDescarga);

            // Abrir la nueva página en una nueva pestaña
            window.open(enlaceDescarga.href, '_blank');
        });
}