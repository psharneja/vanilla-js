const {exec} = require('child_process');
const fs = require('fs');

function saveData(output) {
   const list = output.trim().split(/\r?\n/);
   fs.writeFile('./files.json', JSON.stringify(list), function (err) {
    if(err) {
        console.log(err);
    }
})
}
exec("ls -d -- */", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    //write in file
    saveData(stdout);
})