function downloadCV() {
    var link = document.createElement('a');
    link.href = "/documentos/cv_page-0001.jpg";
    link.download = 'Cv-GomezNahuel.jpg';
    link.click();
}

function openCV() {
    var pdfPath = '/documentos/cv_page-0001.jpg';
    window.open(pdfPath, '_blank');
}

function openCertificado() {
    var pdfPath = '/documentos/Curso Android_page-0001.jpg';
    window.open(pdfPath, '_blank');
}

