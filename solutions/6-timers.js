import fs from 'fs';

// BEGIN

const watch = (filepath, interval, callback) => {
    let lastEdit; 
    try 
    {
        lastEdit = fs.statSync(filepath).mtimeMs;
    }
    catch (err)
    {
        return callback(err);
    }
    
    let stats;
const timerId = setInterval(() => {
    try 
    {
        stats = fs.statSync(filepath);
    }
    catch (err)
    {
        clearInterval(timerId);
        return callback(err);
    }
    if (stats.mtimeMs !== lastEdit) 
    {
        lastEdit = stats.mtimeMs;
        callback(null);
    }
    
    }, interval);

  return timerId;
};

export default watch;
// END
