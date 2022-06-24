function solution(n) {
    function DFS(v) {
        if (v > 7) return; 
        else {
            
            DFS(v*2); //왼쪽자식
            DFS(v*2+1); //오른쪽자식
            console.log(v); // 부모출력하고
        }
    }
    DFS(n);
}
console.log(solution(1));

