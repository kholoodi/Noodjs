// some package is in javascript like fs (file system )
//read from file 

const fs = require('fs');
let result = fs.readFileSync('./text-file.txt','utf-8');
console.log(result);
console.log('text');
//readFileSyn() تتنظر حتى وصول البينات من الملف المراد طباعته ثم تكمل عمل البرنامج 
/**
 * hello
 * text
 */
