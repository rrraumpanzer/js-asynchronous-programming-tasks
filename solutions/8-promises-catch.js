import fsp from 'fs/promises';

// BEGIN
export const touch = (file) =>
    fsp.access(file).catch((err) => fsp.writeFile(file,""))
// END