// 콜라츠 추축

// 내풀이 방식 while문 사용
// function solution(num) {
//     let answer = 0;
//     while (num !== 1) {
//         if (num % 2 == 0) {
//             num = num / 2;
//         } else {
//             num = (num * 3) + 1;
//         }
//         answer++;
//     }
//     if (answer >= 500) {
//         return -1;
//     } else {
//         return answer; 
//     }
// }

function solution(num) {
    let answer = 0;
    while (num !== 1 && answer !== 500) {
        num % 2 == 0 ? num = num / 2 : num = (num * 3) + 1;
        answer++;
    }
    return num == 1 ? answer : -1;
}

const n = 6;
console.log(solution(n));