// 정수 내림차순으로 배치하기
/*
    내 풀이
    string으로 일단만들고 split으로 쪼개서 숫자배열로 만들어줘서 내림차순으로 정렬시켜서 
    다시 join으로 배열풀어주고 Number로 숫자로 만들어줌 
*/
function solution(n) {
    let answer = (n + "").split("").map((item) => +item);
    return Number(answer.sort((a, b) => b - a).join(""));
}

const n = 118372;

console.log(solution(n));