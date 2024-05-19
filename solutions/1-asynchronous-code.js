import fs from 'fs';

// BEGIN
const print = (fileName) => fs.readFile(fileName, 'utf-8', (_error, data) => {console.log(data);})
export default print;
// END