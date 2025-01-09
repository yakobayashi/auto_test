// お題「cocolym.txt」読み込み
const fs = require('fs');
let text = fs.readFileSync("cocolym.txt", 'utf-8');
const array = Array.from((text).split(/\n/));
// console.log(array);

// 【問題1】
// 「cocolym.txt」から重複を削除する処理を記載
// ※setオブジェクトは使用禁止
const pattern_C = (array) => {
    const result = array.filter((val,index,self) => self.indexOf(val) === index);
    return result;
}

const arr = pattern_C(array);

// 重複削除をいったん表示させてる
console.log('パターンC：' + pattern_C(array).length);
console.log(pattern_C(array));

// 【問題2】
// 整形する処理を記載
const str = [];
str.push(arr[0].split('').reverse().join(''));
let s = arr[1].slice(0,4); 
let r = arr[1].slice(4,12);
str.push(r+s);
str.push((arr[2] + arr[3] + arr[4] + arr[5] + arr[6]).replace(/ /g,""));
str.push(arr[7].replaceAll(/\W/g,""));
str.push(arr[8].replaceAll("A","C").replace("a","c"));

// 表示 console.log(str);
str.forEach((element) => console.log(element));

