// 내가 푼 답 
// function solution(str) {
//     let answer = 0;
//     let stack = [];
//     for (let x of str) {
//         if (!isNaN(x)) {
//             stack.push(x);    
//         } else if (x == '+') {
//             answer = Number(stack[stack.length - 2]) + Number(stack[stack.length - 1]);
//             stack.pop();
//             stack.pop();
//             stack.push(String(answer));
//         } else if (x == '*') {
//             answer = Number(stack[stack.length - 2]) * Number(stack[stack.length - 1]);
//             stack.pop();
//             stack.pop();
//             stack.push(String(answer));
//         } else if (x == '-') {
//             answer = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1]);
//             stack.pop();
//             stack.pop();
//             stack.push(String(answer));
//         }
//     }
//     return answer;
// }

// const string = '352+*9-';
// console.log(solution(string));

function solution(str) {
    let answer;
    let stack = [];
    for (let x of str) {
        if (!isNaN(x)) stack.push(Number(x));
        else {
            let rt = stack.pop();
            let lt = stack.pop();
            if (x==='+') stack.push(lt + rt);
            else if (x==='-') stack.push(lt - rt);
            else if (x==='*') stack.push(lt * rt);
            else if (x==='/') stack.push(lt / rt);
        }
    }
    answer = stack[0];
    return answer;
}

const string = '352+*9-';
console.log(solution(string));