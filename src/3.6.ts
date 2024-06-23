// type T = {foo:number,bar:string};
// const obj:T = {foo:1,bar:"aiueo"}
// const {foo,bar} = obj;
// console.log(foo);
// console.log(bar);

// type T2 = {foo:number,bar:string,"foo bar":number}
// const obj:T2 = {foo:123,bar:"japan","foo bar":777}
// const {
//     foo,bar:barVar,"foo bar":foobar
// } = obj;
// console.log(foo);
// console.log(barVar);
// console.log(foobar);

// const obj = {
//     str: "hello, world!",
//     num: 1234
//   };
//   const {
//     foo
//   } = obj;

// const nested = {
//     num:123,
//     obj:{
//         foo:"hello",
//         bar:"world",
//     }
// }

// const {num,obj:{foo:aiu}} = nested;

// console.log(num);
// console.log(aiu);

// const arr = [1,2,4,8,16,32];

// const [first,second,third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

// const obj = {arr:[...arr],goo:123}

// const {arr:[foo,bar,uber],arr:aiu} = obj
// console.log(foo);
// console.log(bar);
// console.log(uber);
// console.log(aiu);

// const arr: ({ name: number; age: number } | number)[] = [
//     { name: 123, age: 18 },
//     44,
//     99,
//     33
//   ];

//   const [{ name:first }] = arr as [{ name: number; age: number }, ...number[]];

//   console.log(first);

//   const arr = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
  
//   // 配列の最初の要素から 'name' プロパティを抽出
//   const [{ name:name1 }] = arr;
  
//   console.log(name1); // 出力: 'Alice'

// const arr = [1, 2, 4, 8, 16, 32];

// const [,foo,,bar,,baz] = arr;
// console.log(foo);
// console.log(bar);
// console.log(baz);

// const tuple:[string,number] = ["uhyo",26];
// const [myName,age] = tuple;

// console.log(myName);
// console.log(age);

// type Obj = {foo?:number};
// const obj1:Obj={};
// const obj2:Obj={foo:-1234};
// // const {foo=500} = obj1;
// const foo = obj1.foo != undefined ? obj1.foo : 500
// console.log(foo);
// const {foo:bar=500} = obj2;
// console.log(bar)

// const obj = {foo:null};

// const {foo=123} = obj;
// console.log(foo);

// type Obj = {foo?:number};
// const obj1:Obj = {};
// const {foo=500} = obj1;
// console.log(foo);

// type NestedObj = {
//     obj?:{
//         foo:number
//     }
// };

// const nested1:NestedObj = {
//     obj:{foo:123},
// };

// const nested2:NestedObj = {};

// const {obj:{foo:foo1} = {foo:500}} = nested1;
// const {obj:{foo:foo2} = {foo:500}} = nested2;

// console.log(foo1);
// console.log(foo2);

//

// const arr = [1,1,2,3,5,8,13];
// const [first,second,third,...res] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(res);