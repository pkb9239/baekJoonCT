// 자릿수 더하기

// function solution(n)
// {   
//     const N = String(n);
//     let answer = 0;
//     for (let i = 0; i < N.length; i++) {
//         answer = answer + Number(N[i]);
//     }
//     return answer;
// }

const n = 987;

console.log(solution(n));

// 쉬운방법 


function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
} 
//n+""은 문자열로 바꿔줌
