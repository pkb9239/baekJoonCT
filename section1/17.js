// function solution(n, arr) {
//     let answer = new Set([...arr]);
    
//     return answer;
    
// }
// const arr = ['good', 'time', 'good', 'time', 'student'];
// const n = 5;
// console.log(solution(n, arr));

function solution(n, arr) {
    let answer = arr.filter((item, index) => {
        return arr.indexOf(item) === index;// a.indexOf(b)는 a배열에서 b가 위치한 index값을 알려준다. 
    });
    return answer;
    
}
const arr = ['good', 'time', 'good', 'time', 'student'];  
const n = 5;
console.log(solution(n, arr));