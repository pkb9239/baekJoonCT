// 슬라이딩 윈도우 알고리즘

// 내 코드 
// function solution(k, arr) {
//     let answer = arr[0] + arr[1] + arr[2];
//     for (let i = 1; i < arr.length; i++) {
//         sum = arr[i] + arr[i+1] + arr[i+2];
//         if (sum > answer) answer = sum;
//     }

//     return answer;
// }


// const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, arr));

function solution(k, arr) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];
    answer = sum;
    for (let i = k; i < arr.length; i++) {
        sum += (arr[i] - arr[i - k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}


const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));