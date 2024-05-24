import fsp from 'fs/promises';
import path from 'path';

// BEGIN
export const getTypes = (listOfPaths) => {
    let promises_array = listOfPaths.map((path) => {
        return fsp.stat(path)
            .then((stat) => 
            {
                if (stat.isDirectory()) return 'directory'
                else return 'file';
            })
            .catch(() => null);
    })
    return Promise.all(promises_array);
}
// END