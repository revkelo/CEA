window.onload = function() {
    const { jsPDF } = window.jspdf;

    document.getElementById('informe1').addEventListener('click', function (e) {
        e.preventDefault();
        fetchAndGeneratePDF("Informe Aprobado", "http://localhost:8081/examen-practico-aprobado", "http://localhost:8081/cliente","http://localhost:8081/matriculados", 'aprobado');
    });
    
    document.getElementById('informe2').addEventListener('click', function (e) {
        e.preventDefault();
        fetchAndGeneratePDF("Informe Reprobado", "http://localhost:8081/examen-practico-reprobado", "http://localhost:8081/cliente", 'reprobado');
    });
    
        function fetchAndGeneratePDF(informe, dataUrl, clientesUrl, matriculadoUrl, tipoInforme) {
            Promise.all([
                fetch(dataUrl).then(response => response.json()),
                fetch(clientesUrl).then(response => response.json())
            ])
            .then(([data, clientes]) => {
                fetch(matriculadoUrl)
                .then(response => response.json())
                .then(matriculados => {
                    // Combina los datos con los nombres basados en id_matriculado y id_cliente
                    const combinedData = data.map(item => {
                        const matriculado = matriculados.find(matriculado => matriculado.id_matriculado === item.id_matriculado);
                        const cliente = clientes.find(cliente => cliente.id_cliente === matriculado.id_cliente);
                        return {
                            ...item,
                            nombre_cliente: cliente ? cliente.nombre : "Nombre no disponible"
                        };
                    });
        
                    // Transforma los datos en un formato adecuado para jsPDF-AutoTable
                    const tableHeaders = [Object.keys(combinedData[0])]; // Obtiene los encabezados de columna de las claves del primer objeto
                    const tableData = combinedData.map(item => Object.values(item)); // Obtiene los valores para cada fila
        
                    // Genera el PDF con los datos combinados
                    if (tipoInforme === 'aprobado') {
                        generatePDF(informe, tableHeaders, tableData, 'aprobado');
                    } else {
                        generatePDF(informe, tableHeaders, tableData, 'reprobado');
                    }
                })
                .catch(error => {
                    console.error("Error fetching matriculados:", error);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        }
    
    function generatePDF(informe, headers, data, tipoInforme) {
        const doc = new jsPDF();
    
        // Añade el logo o imagen
        const logo = new Image();
        logo.src = './img/logo.png'; // Reemplaza con la ruta de tu imagen
        doc.addImage(logo, 'PNG', 10, 11, 60, 20); // Ajusta la posición y el tamaño según sea necesario
    
        // Añade el título
        doc.setFontSize(18);
        doc.text(`Este es el ${informe}`, 70, 40);
    
        // Añade la tabla al PDF con estilos personalizados
        doc.autoTable({
            startY: 50,
            head: headers,
            body: data,
            theme: 'grid', // Cambia el tema a 'grid' para tener una tabla con bordes
            headStyles: { fillColor: [216, 19, 36] }, // Cambia el color de fondo del encabezado a rojo
            bodyStyles: { textColor: [50, 50, 50] }, // Cambia el color del texto del cuerpo
            alternateRowStyles: { fillColor: [240, 240, 240] }, // Cambia el color de fondo de las filas alternas
            margin: { top: 40 }, // Ajusta el margen
        });
    
        // Añade texto adicional al PDF
        const finalY = doc.autoTable.previous.finalY + 10;
        doc.setFontSize(12);
        if (tipoInforme === 'aprobado') {
            doc.text(`En este informe se muestran las personas matriculadas que \nhan realizado el curso y han aprobado el examen practico`, 14, finalY);
        } else {
            doc.text(`En este informe se muestran las personas matriculadas que \nhan realizado el curso y han reprobado el examen practico`, 14, finalY);
        }
    
        // Guarda el PDF en un Blob
        const pdfBlob = doc.output('blob');
    
        // Crea una URL para el Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);
    
        // Abre el PDF en una nueva pestaña
        const newWindow = window.open(pdfUrl, '_blank');
    
        // Revoca la URL cuando la nueva ventana/pestaña se cierra
        newWindow.onunload = function () {
            URL.revokeObjectURL(pdfUrl);
        };
    }
}