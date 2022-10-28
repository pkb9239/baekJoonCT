// 문자열 다루기 기본

/*
    every()메소드는 배열 안의 모든 요소가 주어진 판별함수를 통과하는지에 따라 boolean값을 도출한다. 
    위에서는 모든 요소가 숫자가 맞으면 true를 return하고 어떤 요소라도 숫자가 아닌 것이 판별되면 false를 리턴할 것이다.
*/
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s.split("").every(c => !isNaN(c))
    } else {
        return false;
    }
}
const s = "a234";

console.log(solution(s));