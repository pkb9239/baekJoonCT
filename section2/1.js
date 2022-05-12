// function solution(arr) {
//     let answer = [];
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             if (!answer.includes(arr[i])) {
//                 answer.push(arr[i]);
//             }
//         } else {
//             if (!answer.includes(arr[i + 1])) {
//                 answer.push(arr[i + 1]);
//             }
//         }
//     }
//     return answer;
// }

// const arr = [7, 3, 9, 5, 6, 12];
// console.log(solution(arr));

function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i+1]) { 
            answer.push(arr[i+1]);
        }
    }
    return answer;
}

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

