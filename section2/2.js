// 내 코드
// function solution(arr) {
//     let answer = 0;
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let x of arr) {
//         if (max < x) {
//             max = x;
//             answer++;
//         }
//     }
//     return answer;
// }

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

function solution(arr) {
    let answer = 1;
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }
    return answer;
}