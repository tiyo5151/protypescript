// for (let i:number = 1;i<=100;i++) {
//     if (i%15===0) {
//         console.log("Fizzbuzz")
//         continue;
//     }
//     if (i%3===0) {
//         console.log("Fizz")
//     } else if (i%5===0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// };

// for (let i:number = 1;i<=100;i++) {
//     i%5===0&&i%3===0 ? console.log("FizzBuzz") : (i%3===0 ? console.log("Fizz") : (i%5===0 ? console.log("Buzz") : console.log(i)))
// }

// for (let i:number = 1;i<=100;i++) {
//     switch (i) {
//         case 15||30||45||60||75||90:
//             console.log("FizzBuzz");
//             continue;
//         case 5||10||15||20||25||30||45||50||55||65||70||75||80||85||90||95||100:
//             console.log("Buzz");
//             continue;
//         case 3||6||9||12||15||18||21||24||27||30||33||36||39||42||45||48||51||54||57||60||63||66||69||72||75||78||81||84||87||90||93||96||99:
//             console.log("Fizz");
//             continue;
//         default:
//             console.log(i);
//             continue;
//     }
// }
// 無理でした

// for (let i = 1; i <= 100; i++) {
//     let output = '';

//     switch (true) {
//         case i % 15 === 0:
//             output = "FizzBuzz";
//             break;
//         case i % 5 === 0:
//             output = "Buzz";
//             break;
//         case i % 3 === 0:
//             output = "Fizz";
//             break;
//         default:
//             output += String(i);
//     }

//     console.log(output);
//     // process.stdout.write(output)
// };

// let result = "";
// for (let i = 1; i <= 100; i++) {
//   if (i > 1) {
//     result += " ";
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     result += "FizzBuzz";
//   } else if (i % 3 === 0) {
//     result += "Fizz";
//   } else if (i % 5 === 0) {
//     result += "Buzz";
//   } else {
//     result += String(i);
//   }
// }
// console.log(result);
// let output = '';

// for (let i = 1; i <= 100; i++) {

//     switch (true) {
//         case i % 15 === 0:
//             output += "FizzBuzz";
//             continue;
//         case i % 5 === 0:
//             output += "Buzz";
//             continue;
//         case i % 3 === 0:
//             output += "Fizz";
//             continue;
//         default:
//             output += String(i);
//     }
//     // process.stdout.write(output)
// };

// console.log(output);
