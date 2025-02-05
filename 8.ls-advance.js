const fs = require('node:fs/promises');
const { console } = require('node:inspector');
const path = require('node:path');
const picocolors = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try {
        files = await fs.readdir(folder)
    }catch(err) {
        console.error(`Error al leer el directorio: ${folder}` )
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath); // status - informacion del archivo
        } catch {
            console.error(`Error al leer el archivo: ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : '-';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;
    } )

    const filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(fileInfo => console.log(fileInfo));
    
}

ls(folder);