// 내 코드 
// function solution(s) {
//     let answer='';
//     if (s.length % 2 == 1) {
//         answer += s[(s.length -1)/ 2];           
//     } else {                                     
//         answer += s[(s.length / 2) - 1];
//         answer += s[(s.length / 2)];                     
//     }
//     return answer;
// }
// const str = 'fifa1234sss';
// console.log(solution(str));


// function solution(s) {
//     let answer='';
//     let mid = Math.floor(s.length / 2);
//     if (s.length % 2 == 1) answer = s.substring(mid, mid+1); // substring(a, b) 여기서 a, b는 인덱스임
//     else answer = s.substring(mid-1, mid + 1);
//     return answer;
// }
// const str = 'goodex';
// console.log(solution(str));


function solution(s) {
    let answer='';
    let mid = Math.floor(s.length / 2);
    if (s.length % 2 == 1) answer = s.substr(mid, 1); // substr(a, b) 여기서 a는 인덱스임 b는 a에서부터 b개 
    else answer = s.substr(mid-1, 2);
    return answer;
}
const str = 'goodex';
console.log(solution(str));