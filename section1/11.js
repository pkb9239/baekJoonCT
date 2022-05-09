function solution(s) {
    let answer = 0;
    for (let x of s) {
        if (x == x.toUpperCase()) answer++;
    }
    return answer;
}

const str = 'KoreaTimeGood';
console.log(solution(str));

// 아스키코드로 풀기  대문자아스키코드는 65~90  소문자 97~122
// function solution(s) {
//     let answer = 0;
//     for (let x of s) {
//         let num = x.charCodeAt();
//         if (num >= 65 && 90 >= num) answer++;
//     }
//     return answer;
// }

// const str = 'KoreaTimeGood';
// console.log(solution(str));