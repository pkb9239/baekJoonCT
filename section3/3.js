function solution(s) {
    let answer="";
    for (let x of s) {   //isNaN 숫자가 아니면 
        if (!isNaN(x)) answer+=x;
    } 
    
    return parseInt(answer);
}

const str = 'g0en2T0s8eSoft';
console.log(solution(str));

// function solution(s) {
//     let answer=0;
//     for (let x of s) {  
//         if (!isNaN(x)) answer=answer*10+ Number(x);
//     } 
    
//     return answer;
// }

// const str = 'g0en2T0s8eSoft';
// console.log(solution(str));