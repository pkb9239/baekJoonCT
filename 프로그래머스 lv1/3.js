const n = 5;
const lost = [2, 4];
const reserve = [3];
console.log(solution(n, lost, reserve));

function solution(n, lost, reserve) {
    let answer = 0;
    let reallost = lost.filter((item) => !reserve.includes(item)); // 빌려줄수도없으면서 진짜 체육복이 없는 사람
    let possibleuni = reserve.filter((item) => !lost.includes(item)); // 자기 체육복있으면서 체육복 빌려줄수있는사람
    reallost.sort((a, b) => a - b); // [4, 2], [3, 2] 방지하기 위해서
    answer = n - reallost.length; //현재 체육수업 들을 수 있는 사람 수

    reallost.forEach((item) => {
        if (possibleuni.length === 0) { //체육복 빌려줄수있는 사람이 없으면 종료
            return;
        }
        if (possibleuni.includes(item - 1)) {
            possibleuni = possibleuni.filter((r) => r !== item - 1); 
            answer++;
        }
        else if (possibleuni.includes(item + 1)) {
            possibleuni = possibleuni.filter((r) => r !== item + 1);
            answer++;
        }
    });
    return answer;
}