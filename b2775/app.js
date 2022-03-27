const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let array = [];
for (let i = 0; i < +input[0]; i++) {
  const k = +input[2*i+1]; // 1  2
  const n = +input[2*i+2]; // 3  3
  array.push([k, n]);
}

let floor = [];
let sum = 0;
for(let i = 0; i < array.length; i++){
    //k층 n호
    k = array[i][0]; //1
    n = array[i][1]; //3
    for(let j = 0; j <= k; j++){ //0층부터 k층까지
        floor[j] = [];
        for(let m = 1; m <= n; m++){ // 1호부터 n호까지
            if(j === 0){ //0층이라면
                floor[j].push(m);
            }else{ // j가 0이 아닐 때 
                sum += floor[j-1][m-1];
                floor[j].push(sum);
                if(m === n){
                    sum = 0;
                }
            }
        }
    }
    console.log(floor[k][n-1]);
}