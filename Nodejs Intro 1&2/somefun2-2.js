function sum (num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 -num2;
}
let operation = process.argv[2]; 
let num1 = process.argv[3] *1; 
let num2 = process.argv[4] *1;
// *1 convert input to ingter

if (operation == 'sum'){
    console.log(sum(num1,num2));
}
else if (operation == 'sub'){
    console.log(sub(num1, num2))
}

//PS D:\Tuwaq\Node.js> node somefun2-2.js sum 1 2     
//PS D:\Tuwaq\Node.js> node somefun2-2.js sub 5 3