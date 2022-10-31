// 이상한 문자 만들기
// 내풓이 

// function solution(s) {
//     let answer = '';
//     let words = s.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words[i].length; j++) {
//             if (j % 2 == 0) {
//                 answer += words[i][j].toUpperCase();
//             } else {
//                 answer += words[i][j].toLowerCase();
//             }
//         }
//         if (i < words.length - 1) {
//             answer += " ";
//         }
//     }
//     return answer;
// }

function solution(s) {
    var x = s.split(' ');
    var answer = [];    
    for (let i = 0; i < x.length; i++) {
        answer.push(x[i].split('').map((cur, j) => j%2 ? cur.toLowerCase() : cur.toUpperCase()).join(''));
    }
  return answer.join(" ");
}

const s = "try hello world";

console.log(solution(s));