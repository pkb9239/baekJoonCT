// 내 코드
// function solution(arr) {
//     let answer = 0;
//     let answer2;
//     const item = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             item.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < item.length; i++) {
//         answer = answer + item[i];
//     }
//     answer2 = Math.min(...item);
//     console.log(answer);
//     console.log(answer2);
// }
// const arr = [12, 77, 38, 41, 53, 92, 85];
// solution(arr);


function solution(arr) {
    let answer = [];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let value of arr) {
        if (value % 2 == 1) {
            sum += value;
            if (value < min) min = value;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}
const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));