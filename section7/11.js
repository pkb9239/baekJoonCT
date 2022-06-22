//결정 알고리즘이란 답을 정하고 이 답이 유효한지 확인해 가면서 더 좋은 답을 찾아가는 방식입니다.
// 결정 알고리즘의 기본은 이분탐색이다.


function count(songs, capacity) {
    let cnt = 1, sum = 0;
    for (let x of songs) {
        if (sum + x > capacity) { //27
            cnt++
            sum = x;
        } //  [1, 2, 3, 4, 5, 6, 7, 8, 9];
        else sum += x;
    }
    return cnt;
}

function solution(item, m) {
    let answer;
    let lt = Math.max(...item);
    let rt = item.reduce((pre, cur) => {
        return pre + cur
    }, 0);
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(item, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        }
        else {
            lt = mid + 1;
        }
    }
    return answer;
}

const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const m = 3;

console.log(solution(item, m));