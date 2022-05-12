// 내 코드
// function solution(arr) {
//     let answer = [];
//     const A = arr[0]; // a가 내는것
//     const B = arr[1]; // b가 내는것
//     for (let i = 0; i < 5; i++) {
//         if (A[i] == B[i]) {
//             answer.push('D');
//         }
//         else if (A[i] > B[i]) {
//             if (A[i] === 3 && B[i] === 1) {
//                 answer.push('B');
//             } else {
//                 answer.push('A');
//             }
//         } else {
//             if (B[i] === 3 && A[i] === 1) {
//                 answer.push('A');
//             } else {
//                 answer.push('B');
//             }
//         } 
//         console.log(answer[i]);
//     }
// }

// const arr = [[2, 1, 2, 1, 3], [1, 3, 2, 3, 1]];     
// solution(arr);

function solution(a, b) {
    let answer="";
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) answer += 'D'+ ' ';
        else if (a[i] == 1 && b[i] == 3) answer += 'A' + ' ';
        else if (a[i] == 2 && b[i] == 1) answer += 'A' + ' ';
        else if (a[i] == 3 && b[i] == 2) answer += 'A' + ' '; 
        else answer += 'B' + ' ';
    } 
    return answer;
}

const a = [2, 1, 2, 1, 3];
const b = [1, 3, 2, 3, 1];   
console.log(solution(a, b));