window.onload = function() {
    const { jsPDF } = window.jspdf;

    document.getElementById('informe1').addEventListener('click', function (e) {
        e.preventDefault();
        fetchAndGeneratePDF("Informe 1", "http://localhost:8081/cliente");
    });

    document.getElementById('informe2').addEventListener('click', function (e) {
        e.preventDefault();
        generatePDF("Informe 2", []);
    });

    function fetchAndGeneratePDF(informe, url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Transform data into a format suitable for jsPDF-AutoTable
                const tableHeaders = [Object.keys(data[0])]; // Get column headers from the keys of the first object
                const tableData = data.map(item => Object.values(item)); // Get values for each row
                generatePDF(informe, tableHeaders, tableData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function generatePDF(informe, headers, data) {
        const doc = new jsPDF();

        // Add table to the PDF
        doc.autoTable({
            startY: 20,
            head: headers,
            body: data,
            theme: 'striped',
        });

        // Add additional text to the PDF
        doc.text(`Este es el informe ${informe}`, 10, doc.autoTable.previous.finalY + 10);

        // Save the PDF to a Blob
        const pdfBlob = doc.output('blob');

        // Create a URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');

        // Revoke the URL when no longer needed
        URL.revokeObjectURL(pdfUrl);
    }
}
