function solution(n, arr) {
    let answer = 0;
    let lt = 0;
    let sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === n) answer++;
        while (sum >= n) {
            sum-=arr[lt++];
            if(sum===n) answer++; 
        }
    }
    return answer;
}


// function solution(m, arr){
//     let answer=0, lt=0, sum=0;
//     for(let rt=0; rt<arr.length; rt++){
//         sum+=arr[rt];
//         if(sum===m) answer++;
//         while(sum>=m){
//             sum-=arr[lt++];
//             if(sum===m) answer++;       
//         }
//     }        
//     return answer;
// }
const arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));