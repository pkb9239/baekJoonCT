// 내가 푼 방식
// set으로 중복제거 후 indexOf로 자리 찾음
// function solution(item, m) {
//     let answer;
//     const newItem = [...item];
//     newItem.push(m);
//     newItem.sort((a, b) => a - b);
//     const set = [...new Set(newItem)];
//     console.log(set);
//     answer = set.indexOf(m) + 1;
//     return answer;
// }

// 이분 탐색으로 풀기
function solution(item, m) {
    let answer;
    item.sort((a, b) => a - b);
    let rt = item.length - 1;
    let lt = 0;
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (item[mid] === m) {
            answer= mid + 1;
            break;
        } else if (item[mid] > m) rt = mid - 1
        else lt = mid + 1;
    }

    return answer;
}

const arr = [23, 87, 65, 12, 57, 32, 99, 81];
const M = 81;

console.log(solution(arr, M));