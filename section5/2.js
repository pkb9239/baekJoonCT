// 내가 한 방식 

// function solution(arr1, arr2) {
//     let answer = [];
//     let n = arr1.length;
//     let m = arr2.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (arr1[i] == arr2[j]) answer.push(arr1[i]);
//         }
//     }
//     answer.sort((a, b) => a - b);
//     return answer;
// }

// const arr1 = [1, 3, 9, 5, 2];
// const arr2 = [3, 2, 5, 7, 8];
// console.log(solution(arr1, arr2));


// 투포인터 활용 => 1. 두 배열을 일단 오름차순으로 정렬 2. 투포인터사용
// function solution(arr1, arr2) {
//     let answer = [];
//     let a = arr1.sort((a, b) => a - b);
//     let b = arr2.sort((a, b) => a - b);
//     let p = 0;
//     let q = 0;
//     while(p < a.length && q < b.length) {
//         if (a[p] == b[q]) {
//             if (a.length < b.length) {
//                 answer.push(b[q++]);
//             } else answer.push(a[p++]); 
//         } 
//         else {
//             if (a[p] < b[q]) {
//                 a[p++];
//             } else {
//                 b[q++];
//             }
//         } 
//     }
    
//     return answer;
// }


function solution(arr1, arr2) {
    let answer = [];
    let p = 0;
    let q = 0;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    while (p < arr1.length && q < arr2.length) {
        if (arr1[p] === arr2[q]) {
            answer.push(arr1[p++]);
            q++;
        } else {
            if (arr1[p] < arr2[q]) {
                p++;
            } else {
                q++;
            }
        }
    }
    
    return answer;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));