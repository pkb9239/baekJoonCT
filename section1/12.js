// 내 코드 
// function solution(s) {
//     let answer = s.toUpperCase();
//     return answer;
// }
// const str = 'ItisTimeToStudy';
// console.log(solution(str));


// function solution(s) {
//     let answer = "";
//     for (let x of s) {
//         if (x == x.toLowerCase()) answer += x.toUpperCase();
//         else answer+=x;
//     }
//     return answer;
// }
// const str = 'ItisTimeToStudy';
// console.log(solution(str));

// 아스키코드
function solution(s) {  
    let answer = "";
    for (let x of s) {
        let num = x.charCodeAt();
        if (num >= 97 && num <= 127) { // <= 소문자범위이고 대문자A는 65부터 시작 
            answer += String.fromCharCode(num-32);
        } else {
            answer += x;
        }
    }
    return answer;
}
const str = 'ItisTimeToStudy';
console.log(solution(str));