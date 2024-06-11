"use strict";
// const input1 = "123",input2 = "";
// const input1isNotEmpty = !!input1;
// console.log(input1isNotEmpty);
// const input2isNotEmpty = !!input2;
// console.log(input2isNotEmpty);
// import { createInterface } from "readline";
// const rl = createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question(`名前を入力してください：`,(name) => {
//     const displayName = name || "名無し";
//     console.log(`こんにちは、${displayName}さん`);
//     rl.close()
// })
// import { createInterface } from "readline";
// const rl = createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question(`名前を入力してください：`,(name) => {
//     const displayName = name || getDefaultName(); //短絡評価
//     console.log(`こんにちは、${displayName}さん`);
//     rl.close()
// })
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
