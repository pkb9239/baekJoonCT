function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER; // 아주큰값을 min으로 초기화해놈
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));


// 전개연산자 사용해서 풀기
// function solution(arr) {    
//     let answer = Math.min(...arr);  // ...arr 배열을 펼쳐줌 5, 7, 1, 3, 2, 9, 11 
//     return answer;
// }
// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

// 전개연산자 안쓰고 풀기 apply 사용
// function solution(arr) {    
//     let answer = Math.min.apply(null, arr);
//     return answer;
// }
// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));