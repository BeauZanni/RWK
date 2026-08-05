const fs = require('fs');
const path = require('path');

const carpeta = path.join(process.cwd(), 'fichas');
const archivoRegistros = path.join(process.cwd(), 'registros.json');

function actualizarRegistros() {
  const archivos = fs.readdirSync(carpeta);
  const nombres = [...new Set(archivos.map(f => path.parse(f).name))];
  fs.writeFileSync(archivoRegistros, JSON.stringify(nombres, null, 2));
  console.log('✅ registros.json actualizado con', nombres.length, 'entradas');
}

actualizarRegistros();

