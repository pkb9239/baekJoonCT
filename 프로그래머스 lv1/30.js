// 없는 숫자 더하기 
// 내 풀이

// function solution(numbers) {
//     let answer = 0;
//     for (let i = 0; i < 10; i++) {
//         if (!numbers.includes(i)) answer += i;
//     }
//     return answer;
// }

// 다른사람 풀이 전체합에서 reduce함수이용해서 합을 구해서 전체합 - numbers합 해서 답구하기
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
const numbers = [1,2,3,4,6,7,8,0];
console.log(solution(numbers)); 