"use strict";
// let userName="tiyo"
// if (userName !== "") console.log("ちゃんと名前があってえらい！"); else console.log("名前を入力してください！"); userName = "名無し";
// import { createInterface } from "readline";
// const rl = createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question(`数値を入力してください：`,(line) => {
//     const num = Number(line);
//     if (num < 0) {
//         console.log("numは負の数です");
//       } else {
//         if (num === 0) {
//           console.log("numは0です");
//         } else {
//           console.log("numは正の数です");
//         }
//       }
// });
// import { createInterface } from "readline";
// const rl = createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question(`コマンドを入力してください：`,(name) => {
//     switch(name) {
//         case "greet":
//             console.log("こんにちは。");
//             break;
//         case "cat":
//             console.log("あなたは猫派ですか？");
//             console.log("私は犬派です。");
//             break;
//         default:
//             console.log('コマンド${name}を認識できませんでした。')
//     }
//     rl.close()
// });
// let sum = 0;
// let i = 1;
// // while (i<=100) {
// //     sum += i;
// //     i++
// // }
// // console.log(sum)
// while (true) {
//     if (i > 100) {
//       break;
//     }
//     sum += i;
//     i++;
//   }
//   console.log(sum)
// let i = 1;
// while(i<=100) {
//     i++;
//     if(i%2===1) {
//         continue;
//     }
//     console.log(i)
// }
// let sum = 0;
// for (let i:number=1;i<=100;i++) {
//     sum+=i;
// }
// console.log(sum);
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}
;
