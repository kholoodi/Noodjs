// using readFile() تكمل عمل البرنامج حتى تصل البيانات من الملف المراد طباعته
const fs = require('fs');

fs.readFile('./text-file.txt','utf-8',(err,data) =>{
    if(err){
        console.log('error');
    }
    else{
        console.log(data);
    }
});

console.log('text');

/**
 * text
 * hello
 */