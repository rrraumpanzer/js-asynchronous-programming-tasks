import { forEachSeries } from 'async';
import fsp from 'fs/promises';

// BEGIN
export const exchange = async (file1, file2) => {
    let promise1 = fsp.readFile(file1, 'utf-8');
    let promise2 = fsp.readFile(file2, 'utf-8');
    const [data1, data2] = await Promise.all([promise1, promise2]);
    await fsp.writeFile(file1, data2);
    await fsp.writeFile(file2, data1);
}
// END