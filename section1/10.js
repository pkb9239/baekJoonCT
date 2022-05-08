// 내 코드
// function solution(str) {
//     let answer=0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'R') answer++;
//     }
//     return answer;
// }

// let str = 'COMPUTERPROGRMMING';
// console.log(solution(str));

// function solution(s, t) {
//         let answer=0;
//        for (let x of s) {
//            if (x == t) answer++;
//        }
//         return answer;
//     }
    
//     let str = 'COMPUTERPROGRMMING';
//     console.log(solution(str, 'R'));

    function solution(s, t) {
        let answer = s.split(t).length; // R을 구분자로 하여
        return answer - 1;
    }
    
    let str = 'COMPUTERPROGRMMING';
    console.log(solution(str, 'R'));

