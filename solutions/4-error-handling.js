import fs from 'fs';
import { isError } from 'lodash';

// BEGIN
export const move = (fileResourcePath, fileInsertPath, callback) => { 
    fs.readFile(fileResourcePath, (error1, data) => { //открыта скобка для writeFile
        if (isError(data) || error1)
        { callback(error1); return; }
        
        fs.writeFile(fileInsertPath, data, (error2) => { //открыта скобка для unlink 
            if (error2)
            { callback(error2); return;}
        
            fs.unlink(fileResourcePath, (error3) => { 
                callback(error3);
                return; ///////guard expression
            })  //закрыть скобку от unlink
        }) //закрыть скобку для writeFile
    }) //закрыть скобку для readFile
} //закрыть скобку функции
// END
