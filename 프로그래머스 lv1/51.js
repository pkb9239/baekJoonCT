// 폰켓몬 


// set함수 사용
function solution(nums) {
    let answer = [...new Set(nums)];
    console.log(answer);
    let max = nums.length / 2;
    return answer.length > max ? max : answer.length;
}    

const nums = [3, 1, 2, 3];

console.log(solution(nums));