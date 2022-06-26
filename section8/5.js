//  합이 같은 부분집합(DFS: 아마존 인터뷰)

function solution(arr) {
    let answer = 'NO';
    let flag = 0;
    const total = arr.reduce((pre, cur) => pre + cur, 0);
    let n = arr.length;

    function DFS(L, sum) {
        if (L === n) {
            if ((total - sum) === sum) {
                answer = 'YES';
                flag = 1;
            }
        }
        else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr))