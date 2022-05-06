// function solution(a, b, c) {
//     let answer;
//     if (a>b) answer = b;
//     else answer = a;
//     if (c < answer) answer = c;
//     return answer;
// }
// console.log(solution(10, 5, 3));

// function solution(...arr) {
//     let result = 100;
//     arr.forEach((item) => {
//         if (result > item) result = item;
//     });
//     return result;
// }
// console.log(solution(6, 5, 11));

// solution(99, 43, 31);
// function solution(a, b, c) {
//   const answer = Math.min(a, b, c);
//     console.log(answer);
// }

// console.log(solution(99, 43, 31));
// function solution(a, b, c) {
//   const array = [];
//   array.push(a, b, c);
//   const answer = array.sort((a, b) => a - b);
//   return answer[0];
// }

function solution(a, b, c) {
    let answer;
    if(a < b) answer = a;
    else answer = b;
    if(c < answer) answer = c;

    return answer;
}
console.log(solution(2, 5, 1));