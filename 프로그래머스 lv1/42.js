// 3진법 뒤집기
/*
    n을 toString(3) 을 이용하여 3진수로 만들어주고 split("") 으로 배열로 만들어줍니다.
    reverse()를 이용하여 배열을 반대로 정렬하고 그값을 join("")하여 다시 문자열로 합쳐준 후에
    parseInt(answer, 3)을 통해 3진수가 되어있는 값을 본래의 10진법인 값의 정수로 만들어줍니다.
*/
// function solution(n) {
//     let answer = n.toString(3).split("").reverse().join("");;
//     return parseInt(answer, 3);
// }
const n = 45;


function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n/3);
    }
    return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0);   
}
console.log(solution(n));