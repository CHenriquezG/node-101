const QRCode = require('qrcode');

// URL proporcionada
const url = 'https://web-docente-dev.web.com';

// Generar código QR y guardarlo como archivo de imagen
QRCode.toFile('qr_code.png', url, {
  errorCorrectionLevel: 'H', // Alto nivel de corrección de errores
  color: {
    dark: '#000000',  // Color del código QR
    light: '#FFFFFF'  // Color de fondo
  }
}, function (err) {
  if (err) throw err;
  console.log('Código QR generado y guardado como qr_code.png');
});