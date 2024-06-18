// const obj = {
//     foo: 123,
//     "foo bar": -500,
//     "↑↓↑↓": "",
//   };
  
//   console.log(obj.foo); // 123 と表示される
//   console.log(obj["foo bar"]); // -500 と表示される
//   console.log(obj["↑↓↑↓"])

// const obj = {
//     1: "one",
//     2.05: "two point o five",
// };
// console.log(obj["1"]); // "one" と表示される
// console.log(obj["2.05"]); // "two point o five" と表示される

// const propName = "foo";
// const obj = {
//   [propName]: 123,
// };

// console.log(obj.foo);

// const user = {
//   name: "uhyo",
//   age: 25,
// };

// user.age = 26;
// console.log(user.age);

// import { createInterface } from "readline";

// const rl = createInterface({
//   input:process.stdin,
//   output:process.stdout
// });

// const message = {
//   good:"0以上の数値が入力されました！",
//   bad:"負の数値を入力しないでください！",
// }

// rl.question(`数値を入力してください：`,(line) => {
//   const num = Number(line);
//   console.log(message[num>=0?"good":"bad"]);
//   rl.close()
// });



