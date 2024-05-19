import fs from 'fs';

// BEGIN
export const compareFileSizes = (filePath1, filePath2, callback) =>
    fs.stat(filePath1, (_err, file1_stats) => {
        fs.stat(filePath2, (_err, file2_stats) => {
            callback(null, Math.sign(file1_stats.size - file2_stats.size));
        })
    })
// END