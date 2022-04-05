const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const item = [];
for (let i = 1; i <= +input[0]; i++) {
    item.push(+input[i]);
}
solution(+input[0], item);

function solution(n, testarray) {
    const a = testarray.reduce((arr, cur) => (arr + cur), 0);
    const average = (Math.round(a / n)); 
    const sort = testarray.sort((a, b) => a - b);
    const middle = (sort[Math.floor(sort.length / 2)]);
    const range = (sort[n - 1] - sort[0]);


    const checkValueMap = new Map();
    for (let i = 0; i < n; i++) {
        if (checkValueMap.has(testarray[i])) {
            checkValueMap.set(testarray[i], checkValueMap.get(testarray[i]) + 100);
        } else {
            checkValueMap.set(testarray[i], 0);
        }
    }
    let max = 0;
    let checkValueArr = [];

    for (let value of checkValueMap.keys()) {
        if (max < checkValueMap.get(value)) {
            max = checkValueMap.get(value);
        }
    }

    for (let value of checkValueMap.keys()) {
        if (max === checkValueMap.get(value)) {
            checkValueArr.push(value);
        }
    }
    let mostValue = 0;
    if (checkValueArr.length > 1) {
        mostValue = checkValueArr[1];
    } else {
        mostValue = checkValueArr[0];
    }

    console.log((average === -0) ? 0 : average);
    console.log(middle);
    console.log(mostValue);
    console.log(range);
}

