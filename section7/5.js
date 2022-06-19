// 삽입정렬 이용
// function solution(s, item) {
//     let answer = Array.from({length: s}, ()=>0);
//     item.forEach(x => {
//         let pos = -1;
//         for(let i = 0; i < s; i++) {
//             if (x === answer[i]) pos = i;
//         }
//         if (pos === -1) {
//             for (let i = s - 1; i >= 1; i--) {
//                 answer[i] = answer[i - 1];
//             }
//             answer[0] = x;
//         } else {
//             for (let i = pos; i >= 1; i--) {
//                 answer[i] = answer[i - 1];
//             }
//             answer[0] = x;
//         }
//     });


//     return answer;
// }

// 내장함수 이용
function solution(s, item) {
    let answer = []; 
    item.forEach(x => {
        let pos = -1;
        for (let i = 0; i < s; i++) {
            if (x === answer[i]) pos = i;
        }
        if (pos === -1) {
            answer.unshift(x);
            if (answer.length > s) answer.pop();
        } else {
            answer.splice(pos, 1);
            answer.unshift(x);
        }
    });


    return answer;
}


const s = 5;
const item = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(s, item));