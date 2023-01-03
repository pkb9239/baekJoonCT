// 숫자 문자열과 영단어 

// function solution(s) {
//     let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     let answer = s;
//     for (let i = 0; i < number.length; i++) {
//         let arr = answer.split(number[i]);
//         answer = arr.join(i);
//     }
//     return answer;
// }

function solution(s) {
    let answer = 0;
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    answer = Number(s);
    return answer;
}
const s = "one4seveneight"; //1478

console.log(solution(s));