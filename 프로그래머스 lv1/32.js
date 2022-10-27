// 가운데 글자 가져오기 

// 내풀이 
// function solution(s) {
//     let answer = '';
//     if (s.length % 2 == 0) {
//         answer = s[(s.length / 2) - 1] + s[s.length / 2];
//     } else {
//         answer = s[Math.floor(s.length / 2)];
//     }
//     return answer;
// }

const s = "qwer";

console.log(solution(s));

// 다른 사람 풀이
// substr() 메서드 사용  substr(i, v) i 인덱스 시작점 v 개수;
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

