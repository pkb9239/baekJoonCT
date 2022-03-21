solution();

function d(num) {
    let sum = 0;
    const strNum = String(num);
    for (let i = 0; strNum.length; i++) {
        sum += +strNum[i];
    }
    return num + sum;
}


function solution() {
    const arr = Array(10001).fill(0);
    for (let i = 1; i <= 10000; i++) {
        const ans = d(i); // 여기서 ans는 셀프넘버일수없다.
        if (ans <= 10000) {
            arr[ans]++;
        }
    }
    for (let i = 1; i <= 10000; i++) {
        if (arr[i] === 0) {
            console.log(i);
        }
    }
}