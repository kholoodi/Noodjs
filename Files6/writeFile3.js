// write file or create file if file doesn't exist

const fs = require('fs');
//fs.writeFileSync('./file path &name ',' the content')
fs.writeFileSync(`./Myfile.txt`,`Hello`);
