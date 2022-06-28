// 없는 숫자 더하기

// reducer로 풀기
function solution(numbers) {
    let answer;
    let sum = numbers.reduce((pre, cur) => {
        return pre + cur
    }, 0);
    answer = 45 - sum;
    return answer;
}

const numbers = [1,2,3,4,6,7,8,0];
console.log(solution(numbers));

// includes로 풀기
// function solution(numbers) {
//     var answer = 0;
//     for(let i=0; i<10; i++){
//         if(!numbers.includes(i)) answer += i; // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
//     } 
//     return answer;
// }