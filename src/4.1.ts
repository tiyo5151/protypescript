// console.log(range(5,10));

// function range(min:number,max:number):number[] {
//     const result = [];
//     for (let i = min;i<=max;i++) {
//         result.push(i);
//     }
//     return result
// }

// console.log(range(5,10));

// function helloWorldTimes(n:number):void {
//     for (let i = 0;i<n;i++) {
//         console.log("helloworld");
//     }
// }

// helloWorldTimes(10)

// function helloWorldTimes2(n:number):void {
//     if (n>=100) {
//         console.log(`${n}回なんて無理です！！！`);
//         return;
//     }
//     for(let i = 0;i<n;i++) {
//         console.log("Hello,world!")
//     }
// }

// helloWorldTimes2(5);
// helloWorldTimes2(150);

// function toSeconds(hours:number,minutes:number,seconds:number):number {
//     return hours*3600+minutes*60+seconds
// }

// console.log(toSeconds(4,50,30))

// function toSeconds(hours:number,minutes:number,seconds:number):number {
//     return hours*3600
//         + minutes*60
//         +seconds;
// }

// type Human = {
//     height:number;
//     weight:number;
// };
// const calcBMI = function(human:Human):number {
//     return human.weight/human.height**2;
// };
// const uhyo:Human = {height:1.84,weight:72};

// console.log(calcBMI(uhyo));

// type Human = {
//     height:number;
//     weight:number;
// };
// const calcBMI = function({height,weight}:Human):number{
//     return weight / height**2;
// };
// const uhyo:Human = {height:1.84,weight:72};
// console.log(calcBMI(uhyo));

// const uhyo: Human = { height: 1.84, weight: 72 };
// // エラー: Block-scoped variable 'calcBMI' used before its declaration.
// console.log(calcBMI(uhyo));

// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function({
//   height, weight
// }: Human): number {
//   return weight / height ** 2;
// };

// type Human = {
//     height:number;
//     weight:number;
// };

// const calcBMI = ({
//     height,weight
// }:Human):number => {
//     return weight/height**2;
// };
// const calcBMI = ({
//     height,weight
// }:Human):number => weight/height**2;

// const uhyo:Human = {height:1.84,weight:72};
// console.log(calcBMI(uhyo));

// type Human = {
//     height:number;
//     weight:number;
// };
// type ReturnObj = {
//     bmi:number
// }

// const calcBMIObject = ({
//     height,weight
// }:Human):ReturnObj => ({
//     bmi: weight /height**2
// });

// const calcBMIObject2 = ({
//     height, weight
//   }: Human): ReturnObj => {
//     bmi: weight / height ** 2;
//   };

// const obj = {
//     double(num:number):number {
//         return num * 2;
//     },
//     double2:(num:number):number => num * 2,
// };

// console.log(obj.double(100));
// console.log(obj.double2(-50));

// const sum = (...args:number[]):number => {
//     let result= 0;
//     for (const num of args) {
//         result += num;
//     }
//     return result
// };

// const sum = (...args: number) => {
//     let result= 0;
//     for (const num of args) {
//         result += num;
//     }
//     return result
// };

// console.log(sum(1,10,100));
// console.log(sum(123,456));
// console.log(sum());
// console.log(sum(11,22,33,44));
// console.log(sum(1,10,100,1000,10000,100000))
