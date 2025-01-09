// お題「cocolym.txt」読み込み
const fs = require('fs');
let text = fs.readFileSync("cocolym.txt", 'utf-8');
const array = Array.from((text).split(/\n/));
// console.log(array);

// 【問題1】
// 「cocolym.txt」から重複を削除する処理を記載
// ※setオブジェクトは使用禁止

// -----出力例-----
'yrasrevinna ht01 yppaH oToCoC',
'shipRelation',
'T',
' h',
'  i',
'   n',
'    k',
'A.,.c　　t',
'Aheaak'


// 【問題2】
// 整形する処理を記載

// -----出力例-----
CoCoTo Happy 10th anniversary
Relationship
Think
Act
Check
