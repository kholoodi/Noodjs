// npm = npde package manager
/*dowonload npm package 
1-for intization project to npm write  'npm init ' in terminal
 prss ctrl +c than write npm init -y (to full by defoult values)
2- now we see package.json was cerated
3- install package after select package than copy install command 
now "npm i bitwise" i here for install
5- we see node_modeules folder is add to project 
*/
// Husing package 
const bitwies = require('bitwise');
//do and for given arries bits 
let result = bitwies.bits.and([1,0,1,0],[0,1,0,1]);
console.log(result); //[ 0, 0, 0, 0 ]
