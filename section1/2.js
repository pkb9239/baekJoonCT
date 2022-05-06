// 내가 짠 코드
// function solution(a, b, c) { 
//     let long;
//     let other1;
//     let other2;
//     if (a > b) {
//         long = a;
//         other1 = b;
//     }
//     else {
//         long = b;
//         other1 = a;
//     }
//     if (c > long) {
//         long = c;
//         other1 = b;
//         other2 = a;
//     } else other2 = c;

//     if (long >= other1 + other2) {
//         console.log("NO");
//     } else {
//         console.log("YES");
//     }
// }
// solution(13, 33, 17);


//코드설명
//세 수를 합한거에서 가장 큰수를 뺴준 나머지가 가장 큰 수보다 작거나 같으면 no 크면 yes
function solution(a, b, c) {
    let answer = "YES", max;
    let sum = a + b + c;
    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    if((sum-max) <= max) answer = "NO";
    return answer;
}
console.log(solution(13, 33, 17));


// 더 좋은 빅오가 낮은 코드
//  function solution(A, B, C) {
// if (A + B > C && A + C > B && B + C > A) {
//     return 'YES';
//   } else {
//     return 'NO';
//   }
// }
// console.log(solution(11, 2, 10));