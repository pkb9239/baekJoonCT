const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);
let xArr=input.filter((v,i)=>i%2===0);
let yArr=input.filter((v,i)=>i%2!==0);
console.log(getCoord(xArr),getCoord(yArr));

function getCoord(input){
    return input[0]===input[1]?input[2]:(input[1]===input[2]?input[0]:input[1]);
}