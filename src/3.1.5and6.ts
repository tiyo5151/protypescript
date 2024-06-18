// const obj1 = {
//     bar:456,
//     baz:789,
// };

// const obj2 = {
//     foo:123,
//     ...obj1,
// };

// console.log(obj2);

// const obj1 = {
//     foo:123,
//     bar:456,
//     baz:789,
// };

// const obj2 = {
//     ...obj1,
//     foo:-9999,
// };

// console.log(obj2)

// const obj1 = {
//     foo: 123,
//     bar: 456,
//   };
  
//   const obj2 = {
//     bar: -999,
//     baz: -9999,
//   };
  
//   const obj3 = {
//     ...obj1,
//     ...obj2
//   };
  
//   // obj3は { foo: 123, bar: -999, baz: -9999 }
//   console.log(obj3);

// const foo = {num:1234}
// const bar = foo;
// console.log(bar.num);
// bar.num=0;
// console.log(foo.num);

// const foo = {num:1234};
// const bar = {...foo};
// console.log(bar.num);
// bar.num=0;
// console.log(foo.num);

// const foo = {obj:{num:1234}};
// const bar = {...foo};
// bar.obj.num=0;
// console.log(foo.obj.num);

// const foo = { num: 1234 };
// const bar = foo;
// const baz = { num: 1234 };

// console.log(foo === bar); // true と表示される
// console.log(foo === baz); // false と表示される