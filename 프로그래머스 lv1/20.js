// 히샤드수

// 내풀이 for문 이용

// function solution(x) {
//     let answer = true;
//     let sum = 0;
//     const a = x.toString();
//     for (let i = 0; i < a.length; i++) {
//         sum += Number(a[i]);
//     }
//     if (x % sum !== 0) answer = false; 
//     return answer;
// }

const arr = 13;


function solution(x) {
    return !(x % (x + "").split("").reduce((a, b) => +a + +b));
}
// ""이용하여 string으로 만들어주고 split으로 쪼개서 reduce메서드 이용해서 각각을 더해줌(이떄 +a, +b 숫자로만들어줌);
// 그래서 return 하고 0이나오면 false니까 !을 만나면 true고 0이 아니면 true니까 !만나면 false이다.

console.log(solution(arr));