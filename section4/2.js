// function solution(arr) {
//     let answer = [];
//     for (let x of arr) {
//         x = Number(String(x).split("").reverse().join(""));
//         if (isPrime(x)) {
//             answer.push(x);
//         }
//     }
//     return answer.join(" ");
// }

// const isPrime = (n) => {
//     if (n === 1) return false;
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
// };

// const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

// console.log(solution(arr));


function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    } 
  }
  return true;
}

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
  //   if (n % i === 0) {
  //     return false;
  //   } 
  // }
  // return true;
// }

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) {
      answer.push(res);
    }
  }
  return answer.join(" ");
};


const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));