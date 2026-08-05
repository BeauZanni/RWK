const fs = require('fs');
const path = require('path');
const carpeta = path.join(process.cwd(), '../../fichas');
const archivoIndice = path.join(process.cwd(), '../../indice.json');

function actualizarIndice() {
  const archivos = fs.readdirSync(carpeta);
  const nombres = [...new Set(
    archivos.map(f => path.parse(f).name)
  )];

  fs.writeFileSync(archivoIndice, JSON.stringify(nombres, null, 2));
  console.log('✅ indice.json actualizado con', nombres.length, 'entradas');
}

actualizarIndice();
