function solution(item) {
   let answer = [];
   let copy = [...item];
   const sort = copy.sort((a, b) => a - b);
   for (let i = 0; i < item.length; i++) {
    if (item[i] !== sort[i]) answer.push(i+1);
   }
  return answer;
}
const item = [120, 130, 150, 150, 130, 150];
console.log(solution(item));