// function solution(arr) {
//     let answer = arr;
//     let sum = arr.reduce((acc, cur) => acc + cur, 0);
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if ((sum - (arr[i]+ arr[j])) == 100) {
//                 arr.splice(j, 1);
//                 arr.splice(i, 1);
//             }
//         }
//     }

//     return answer;
// }
// const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));

function solution(arr) {
    let answer = [];
    while (true) {
        const idx = (Math.floor(Math.random() * arr.length));
        if (answer.includes(arr[idx])) continue;
        answer.push(arr[idx]);        
        if (answer.length < 7) continue;
        const sum = answer.reduce((acc, v) => acc + v, 0);
        if (sum === 100) break;
        else answer = [];
        }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));