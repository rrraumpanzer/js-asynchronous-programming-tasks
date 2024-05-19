import fs from 'fs';

// BEGIN
const write = (fileName, writing, callback) => 
    fs.writeFile(fileName, writing, 'utf-8', callback);

export default write;
// END