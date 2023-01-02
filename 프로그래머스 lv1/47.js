//  삼총사 
//  내 풀이 삼중 for문
// function solution(number) {
//     let answer = 0;
//     for (let i = 0; i < number.length - 2; i++) {
//         for (let j = i + 1; j < number.length - 1; j++) {
//             for (let z = j + 1; z < number.length; z++) {
//                 if (number[i] + number[j] + number[z] === 0) answer++; 
//             }
//         }
//     }
//     return answer;
// }
function solution(number) {
    let answer = 0;
    const combination = (current, start) => {
        if (current.length === 3) {
            answer += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return answer;
}

 const number = [-2, 3, 0, 2, -5];
 console.log(solution(number));