// 내 코드
// function solution(item) { 
//     let answer = [...item];
//     // console.log(answer); [ 'B', 'A', 'N', 'A', 'N', 'A' ]
//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] == 'A') {
//             answer[i] = '#';
//         }
//     }

//     return answer.join('');
// }

// const item = 'BANANA';
// console.log(solution(item));

// function solution(s) {
//     let answer = "";
//     for (let x of s) {
//         if (x === 'A') answer += '#';
//         else answer += x;
//     } 
//     return answer;
// }
// let str= 'BANANA';
// console.log(solution(str));


// replace 함수 써서 바꾸기
// string은 값이 복사되는거지 배열처럼 주소 참조가 아니다.
function solution(s) {
    let answer = s;
    answer = answer.replace(/A/g, '#'); // 첫번째 A만나면 #으로 변경
    return answer;
}
let str= 'BANANA';
console.log(solution(str));