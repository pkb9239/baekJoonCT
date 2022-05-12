// 내 코드
// function solution(s) {
//     const arr = [...s];
//     let answer = 
//     arr.filter((item, index) => {
//         return arr.indexOf(item) == index;
//     });
//     return answer.join('');
// }
// const str = 'ksekkset';
// console.log(solution(str));

// function solution(s) {        // a.indexOf('k')는 a에서 'k'문자를 처음 발견하는 index값을 출력 indexOf('k', a) 2번째인자 a는 a번 인덱스부터 k를 찾는다. 발견못하면 -1을 리턴함 
//     let answer = "";
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) == i) answer+= s[i];
//     }

//     return answer;
// }
// const str = 'ksekkset';
// console.log(solution(str));

function solution(s) {        
    let answer = 0;
    let pos = s.indexOf('k');
    while(pos !== -1) {
        answer++;
        pos=s.indexOf('k', pos+1); 
    }

    return answer;
}
const str = 'ksekkset';
console.log(solution(str));