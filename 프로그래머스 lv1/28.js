// 제일 작은 수 제거하기
// 내가 푼 풀이
// Math.min 메소드 이용하여 최소값을 구해서 filter로 최소값을 걸러내고 삼항연산자 이용
// function solution(arr) {
//     const min = Math.min(...arr);
//     let answer = arr.filter(v => v !== min);
//     return answer.length == 0 ? [-1] : answer;
// }

// 다른 사람 풀이
// indexOf메서드와 splice메서드 이용
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length == 0 ? [-1] : arr;
}
const arr = [10];

console.log(solution(arr));