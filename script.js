const containerQR = document.getElementById('containerQR');
const container = document.getElementById('container');
const container1 = document.getElementById('container1');
const formulario = document.getElementById('formulario');
const volver = document.getElementById('volver');
const descargar = document.getElementById('descargar');
const QR = new QRCode(containerQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //para q no se refresque la pagina cuando se presione el boton
    container.style.display = 'none'
    container1.style.display = 'block'
    QR.makeCode(formulario.link.value);
})

volver.addEventListener('click', () => {
    formulario.link.value = ''; // Limpiar el campo de entrada
    container1.style.display = 'none'
    container.style.display = 'block'
})

// Función para descargar el QR como imagen
descargar.addEventListener('click', () => {
    // Obtener el primer elemento canvas del contenedor QR
    const canvas = containerQR.querySelector('canvas');
    if (canvas) {
        const url = canvas.toDataURL('image/png'); // Convertir a Data URL
        const link = document.createElement('a');
        link.href = url; 
        link.download = 'codigo-qr.png'; // Nombre del archivo
        link.click();
    } else {
        alert('No se ha generado ningún código QR.');
    }
});


