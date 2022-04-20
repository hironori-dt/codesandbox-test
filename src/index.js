// /**
//  * const,let宣言
//  */

// var val1 = "へんすうだぜ";
// console.log(val1);

// /**
//  * var変数は上書き可能
//  */
// val1 = "へんすう上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// var val2 = "let変数再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数上書き";
// console.log(val3);

// // const val3 = "const変数再宣言";
// // console.log(val3);

// const val4 = {
//   name:"ひろ",
//   age:30
// }
// console.log(val4);

// val4.name = "hiro"
// console.log(val4);

// val4.address = "kumamoto"
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = '広教';
// const age = '36';
// //
// //私の名前は広教です。年齢は36さいです。

// //従来の表記
// var mess1 = "私の名前は"+name+"です。年齢は"+age+"さいです。";
// console.log(mess1);

// //テンプレート表記
// var mess2 = `私の名前は${name}です。年齢は${age}さいです。`;
// console.log(mess1);

/**
 * アロー関数
 */
// //従来の表記
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
//通常
// const myprofile = {
//   name: "広教",
//   age: 36
// };
// var mess1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}さいです。`;
// console.log(mess1);

// //分割代入(オブジェクト)
// // const { name, age } = myprofile;

// // var mess2 = `私の名前は${name}です。年齢は${age}さいです。`;
// // console.log(mess2);

// //分割代入(配列)
// const myprofile2 = ["広教", 36];
// const [name, age] = myprofile2;

// var mess3 = `私の名前は${name}です。年齢は${age}さいです。`;
// console.log(mess3);

/**
 * デフォルト値　引数など
 */
//  const strhello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
//  strhello("広教");

/**
 * スプレッド構文
//  */
// const arr1 = [1, 2];

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// //通常
// sumfunc(arr1[0], arr1[1]);
// //スプレッド構文
// sumfunc(...arr1);

// //配列コピー
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const [...arr4] = arr2;
// console.log(arr4);

// const arr5 = [10, 20];
// const arr6 = [30, 40];
// const arr7 = [...arr5,...arr6]
// console.log(arr7);

//=でのコピーは不可
// const arr5 = [10, 20];
// const arr6 = arr5;
// console.log(arr6);
