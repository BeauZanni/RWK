const fs = require('fs');
const path = require('path');
const carpeta = path.join(__dirname, '../../fichas'); // sube dos niveles para llegar a la carpeta fichas
const archivoIndice = path.join(__dirname, '../../indice.json');

function actualizarIndice() {
  const archivos = fs.readdirSync(carpeta);
  const nombres = [...new Set( archivos.map(f => path.parse(f).name))];
  fs.writeFileSync(archivoIndice, JSON.stringify(nombres, null, 2));
  console.log('✅ indice.json actualizado con', nombres.length, 'entradas');
}

actualizarIndice();
