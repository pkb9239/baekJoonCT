function solution(s) {
    const arr = [...s];
    let answer = 
    arr.filter((item, index) => {
        return arr.indexOf(item) == index;
    });
    return answer.join('');
}
const str = 'ksekkset';
console.log(solution(str));