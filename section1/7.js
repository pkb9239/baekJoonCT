// 내 코드
// function solution(car, arr) {
//    let answer = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if (car == arr[i][1]) {
//            answer++;
//        }
//    }
    

//     return answer;
// }
// const car = 0;
// const arr = ["12", "20", "54", "30", "87", "91", "30"];

// console.log(solution(car, arr));

function solution(day, arr) {
   let answer = 0;
   for (let x of arr) {
       if (x % 10 === day) answer++;
   }

    return answer;
}
const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));