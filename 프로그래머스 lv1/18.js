// function solution(s){
//     let answer = true;
//     let p = 0;
//     let y = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == "p" || s[i] == "P") p++;
//         if (s[i] == "y" || s[i] == "Y") y++;
//     }
//     if (p == y) return answer;
//     else answer = false;

//     return answer;
// }

const s = "pPoooyY";



//////// 다르게 풀어보기 ////////////////
function solution(s){
    let a = s.toUpperCase().split("Y")
     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;

}

// 코드리뷰해보면
// 1. 먼저 toUpperCase()로 다 대문자로 만들어준다
// 2. 그리고 split으로 p와 y를 기준으로 쪼개준다.
// 그러면 p로 쪼게면 [ '', '', 'OOOYY' ] 요렇게 y로 쪼개면 ['PPOOO', '', '', ] 이렇게 나온다.
console.log( solution("pPoooyY") )
// console.log( solution("Pyy") )