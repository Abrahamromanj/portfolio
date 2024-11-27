import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directoryPath = path.join(__dirname, 'dist'); // Ajusta según tu estructura de carpetas

// Función para modificar los enlaces en los archivos HTML
function modifyLinks(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    // Usa una expresión regular para encontrar y reemplazar enlaces en href, src y url()
    let result = data.replace(/(href|src)="[^"]*\/assets\//g, '$1="./assets/')
                     .replace(/url\([^)]*\/assets\//g, 'url(./assets/');

    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) return console.log(err);
      console.log(`Enlaces modificados en ${filePath}`);
    });
  });
}

// Recorre los archivos en el directorio para buscar los archivos HTML
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('No se pudo escanear el directorio: ' + err);
  }

  files.forEach((file) => {
    if (path.extname(file) === '.html') {
      modifyLinks(path.join(directoryPath, file));
    }
  });
});
