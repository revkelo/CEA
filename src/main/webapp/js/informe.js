window.onload = function() {
            const { jsPDF } = window.jspdf;

            document.getElementById('informe1').addEventListener('click', function (e) {
                e.preventDefault();
                generatePDF("Informe 1");
            });

            document.getElementById('informe2').addEventListener('click', function (e) {
                e.preventDefault();
                generatePDF("Informe 2");
            });

            function generatePDF(informe) {
                const doc = new jsPDF();

                // Datos para la tabla
                const data = [
                    ['Nombre', 'Edad', 'Género'],
                    ['Juan', '30', 'Masculino'],
                    ['María', '25', 'Femenino'],
                    ['Pedro', '40', 'Masculino']
                ];

                // Configuración de la tabla
                const tableColumnWidths = [50, 30, 40];
                const tableRows = [];

                // Llenar filas de la tabla
                for (let i = 0; i < data.length; i++) {
                    const rowData = data[i];
                    const row = [];
                    for (let j = 0; j < rowData.length; j++) {
                        row.push(data[i][j]);
                    }
                    tableRows.push(row);
                }

                // Agregar tabla al PDF
                doc.autoTable({
                    startY: 20,
                    head: [['Nombre', 'Edad', 'Género']],
                    body: tableRows,
                    theme: 'striped',
                    columnStyles: {
                        0: { cellWidth: 50 },
                        1: { cellWidth: 30 },
                        2: { cellWidth: 40 }
                    }
                });

                // Agregar texto adicional al PDF
                doc.text(`Este es el informe ${informe}`, 10, doc.autoTable.previous.finalY + 10);

                // Guardar el PDF en una variable de tipo Blob
                const pdfBlob = doc.output('blob');

                // Crear una URL para el Blob
                const pdfUrl = URL.createObjectURL(pdfBlob);

                // Abrir el PDF en una nueva pestaña
                window.open(pdfUrl, '_blank');

                // Liberar la URL cuando ya no se necesite
                URL.revokeObjectURL(pdfUrl);
            }
        }