const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const arrayLength = +input[0];
const testArray = [];

for (let i = 1; i <= arrayLength; i++) {
    const arr = input[i].split(' ');
    testArray.push({
        N: +arr[0],
        arr: arr.slice(1).map((item) => +item)
    });
}

solution(arrayLength, testArray);

function solution(C, testarray) {
    for (let i = 0; i < C; i++) {
        const item = testarray[i];
        let average = 0;
        for (let j = 0; j < item.N; j++) {
            average += item.arr[j];
        }
        average /= item.N;

        let cnt = 0;
        for (let j = 0; j < item.N; j++) {
            if (average < item.arr[j]) {
                cnt++;
            }
        }
        let answer = cnt / item.N;
        console.log((answer * 100).toFixed(3) + "%");
    }
}





