// 두 개 뽑아서 더하기
console.log(solution([2,1,3,4,1]));

function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push((numbers[i] + numbers[j])); // 2차원 배열사용
        }
    }
    answer = [...new Set(answer)]; //중복 제거
    answer.sort((a, b) => a - b); //정렬

    return answer;
}