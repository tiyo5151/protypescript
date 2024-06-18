// type MyObj = {
//     foo:boolean;
//     bar:boolean;
//     baz?:number;
// }

// const obj:MyObj={foo:false,bar:true};
// const obj2:MyObj={foo:true,bar:false,baz:1234};

// console.log(obj.baz);
// console.log(obj2.baz);

// // console.log(obj2.baz*1000)
// if (obj2.baz !== undefined) {
//     console.log(obj2.baz*1000)
// }

// type MyObj = {
//     readonly foo:number;
// }
// const obj:MyObj={foo:123};
// obj.foo=0

// const num:number=0;
// type T = typeof num;
// const foo:T=123;

// const obj = {
//     foo:123,
//     bar:"hi"
// };

// type T = typeof obj;
// const obj2:T = {
//     foo:-50,
//     bar:"",
// };