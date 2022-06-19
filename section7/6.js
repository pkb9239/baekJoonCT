function solution(item) {
    let 현수;
    let 짝꿍;
    let b = 0;

    for (let i = 0; i < item.length; i++) {
        if (item[i] > b) {
            b = item[i];
        } else {
            현수 = i;
            break;
        }
    }
    for (let i = 현수; i < item.length; i++) {
        if (item[i] > b) {
            b = item[i];
        } else {
            짝꿍 = i + 현수 - 1
        }
    }

  return (`${현수} ${짝꿍}`);
}

const item = [120, 125, 152, 130, 135, 143, 127, 160];
console.log(solution(item));