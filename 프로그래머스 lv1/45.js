// 비밀지도
// 내 풀이
// function solution(n, arr1, arr2) {
//     let answer = [];
//     for (let i = 0; i < n; i++) {
//         const str = (arr1[i] | arr2[i]).toString(2);
//         let line = [];
//         for(let j = str.length - n; j < str.length; j++) { // j가(인덱스값)이 -1일 경우 undefined 반환.
//             if(str[j] === '1') { // 1이면 '#', 그 외 ' '
//                 line.push('#');
//             } else {
//                 line.push(' ');
//             }
//         }
//         answer.push(line.join(''));
//     }
//     return answer;
// }

const n = 6;
const arr1 = [46, 33, 33 ,22, 31, 50]
const arr2 = [27 ,56, 19, 14, 14, 10]

// padStart()메서드 사용해서 앞이 0이여도 생략 못하게 막아주고
// replace()메서드 이용해서 대체하기 
// toString(2) 이진법으로 만들어주기
const solution = (n, arr1, arr2) => arr1.map((el, i) => (el | arr2[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'));

console.log(solution(n, arr1, arr2));
