// function solution(s) {
//     let answer = 'YES';
//     s = s.toLowerCase();
//     let len = s.length;
//     for (let i = 0; i < Math.floor(len / 2); i++) {
//         if (s[i] !== s[len-i-1]) return 'NO';
//     }
//     return answer;
// }

// const str = 'geoeG';  
// console.log(solution(str));


// reverse() 함수 써서 풀어보기
function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    if (s.split('').reverse().join('') !== s) return 'NO';
    return answer;
}

const str = 'goooG';  
console.log(solution(str));