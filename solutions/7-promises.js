import fsp from 'fs/promises';

// BEGIN
export const reverse = (file) => 
    fsp.readFile(file, 'utf-8').then((data) => fsp.writeFile(file, data.split('\n').reverse().join('\n'),'utf-8'))
// END