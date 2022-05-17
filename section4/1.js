function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        const b = String(arr[i]);
        let sum = 0;
        for (let x of b) {
            sum += Number(x);
        }
        if (sum > max) {
            max = sum;
            answer = Number(b);
        } else if (sum == max) {
            if (Number(b)> answer) answer = Number(b);
        }
    }
    return answer;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));


// function solution(arr) {
//     let answer;
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let x of arr) {
//         let sum = 0;
//         let tmp = x;
//         while(tmp) {
//             sum += (tmp % 10);
//             tmp = Math.floor(tmp / 10);
//         }
//         if (sum > max) {
//             max = sum;
//             answer = x;
//         }
//         else if (sum == max) {
//             if (x > answer) answer = x;
//         }
//     }

//     return answer;
// }

// const arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(arr));

// 내장함수
// function solution(arr) {
//     let answer;
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let x of arr) {
//         let sum = x.toString().split('').reduce((acc, cur) => acc+ Number(cur), 0);
//         if (sum > max) {
//             max = sum;
//             answer = x;
//         }
//         else if (sum == max) {
//             if (x > answer) answer = x;
//         }
//     }

//     return answer;
// }

// const arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(arr));
