window.onload = function() {
    const { jsPDF } = window.jspdf;

    document.getElementById('informe1').addEventListener('click', function (e) {
        e.preventDefault();
        fetchAndGeneratePDFaprobado("Informe Aprobado", "http://localhost:8081/examen-practico-aprobado");
    });

    document.getElementById('informe2').addEventListener('click', function (e) {
        e.preventDefault();
        fetchAndGeneratePDFreprobado("Informe Reprobado", "http://localhost:8081/examen-practico-reprobado");
    });

    function fetchAndGeneratePDFaprobado(informe, url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Transform data into a format suitable for jsPDF-AutoTable
                const tableHeaders = [Object.keys(data[0])]; // Get column headers from the keys of the first object
                const tableData = data.map(item => Object.values(item)); // Get values for each row
                generatePDFaprobado(informe, tableHeaders, tableData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function fetchAndGeneratePDFreprobado(informe, url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Transform data into a format suitable for jsPDF-AutoTable
                const tableHeaders = [Object.keys(data[0])]; // Get column headers from the keys of the first object
                const tableData = data.map(item => Object.values(item)); // Get values for each row
                generatePDFreprobado(informe, tableHeaders, tableData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
    function generatePDFaprobado(informe, headers, data) {
        const doc = new jsPDF();

        // Add logo or image
        const logo = new Image();
        logo.src = './img/logo.png'; // Reemplaza con la ruta de tu imagen
        doc.addImage(logo, 'PNG', 10, 11, 60, 20); // Ajusta la posición y el tamaño según sea necesario

        // Add title
        doc.setFontSize(18);
        doc.text(`Este es el ${informe}`, 70, 40);

        // Add table to the PDF with customized styles
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

        // Add additional text to the PDF
        const finalY = doc.autoTable.previous.finalY + 10;
        doc.setFontSize(12);
        doc.text(`En este informe se muestran las personas matriculadas que \nhan realizado el curso pero han aprobado el examen practico`, 14, finalY);

        // Save the PDF to a Blob
        const pdfBlob = doc.output('blob');

        // Create a URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Open the PDF in a new tab
        const newWindow = window.open(pdfUrl, '_blank');

        // Revoke the URL when the new window/tab is closed
        newWindow.onunload = function () {
            URL.revokeObjectURL(pdfUrl);
        };
    }

    function generatePDFreprobado(informe, headers, data) {
        const doc = new jsPDF();

        // Add logo or image
        const logo = new Image();
        logo.src = './img/logo.png'; // Reemplaza con la ruta de tu imagen
        doc.addImage(logo, 'PNG', 10, 11, 60, 20); // Ajusta la posición y el tamaño según sea necesario

        // Add title
        doc.setFontSize(18);
        doc.text(`Este es el ${informe}`, 70, 40);

        // Add table to the PDF with customized styles
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

        // Add additional text to the PDF
        const finalY = doc.autoTable.previous.finalY + 10;
        doc.setFontSize(12);
        doc.text(`En este informe se muestran las personas matriculadas que \nhan realizado el curso pero han reprobado el examen practico`, 14, finalY);

        // Save the PDF to a Blob
        const pdfBlob = doc.output('blob');

        // Create a URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Open the PDF in a new tab
        const newWindow = window.open(pdfUrl, '_blank');

        // Revoke the URL when the new window/tab is closed
        newWindow.onunload = function () {
            URL.revokeObjectURL(pdfUrl);
        };
    }
}
