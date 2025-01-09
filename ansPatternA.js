// お題「cocolym.txt」読み込み
const fs = require('fs');
let text = fs.readFileSync("cocolym.txt", 'utf-8');
const array = Array.from((text).split(/\n/));
// console.log(array);

// 【問題1】
// 「cocolym.txt」から重複を削除する処理を記載
// ※setオブジェクトは使用禁止
const pattern_A = (array) => {
    const result = [];
    for(let i = 0; i < array.length; i++){
        if(!result.includes(array[i]))
            result.push(array[i]);
    }
    return result;
}

const arr = pattern_A(array);

// 重複削除をいったん表示させてる
console.log('パターンA：' + pattern_A(array).length);
console.log(pattern_A(array));

// 【問題2】
// 整形する処理を記載
const change = (str) => {
  const first_line = str[0];
  const second_line = str[1];
  const third_line = str[2] + str[3] + str[4] + str[5] + str[6];
  const fourth_line = str[7];
  const fifth_line = str[8];

  const idx = second_line.indexOf([...second_line].filter(char => char >= 'A' && char <= 'Z'));

  const answer = first_line.split('').reverse().join('')+'\n'
         + second_line.slice(idx) + second_line.slice(0,idx)+'\n'
         + third_line.replace(/\s+/g,'')+'\n'
         + fourth_line.replace(/[^a-zA-Z^]/g, '')+'\n'
         + fifth_line.replace("A", "C").replace("a", "c")
 
  return answer;
}

console.log(change(arr));
