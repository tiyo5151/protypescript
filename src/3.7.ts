// const d = new Date()
// console.log(d);

// const m = d.getFullYear();
// console.log(m);

// d.setFullYear(2030);
// console.log(d);

// const d = new Date("2020-02-03T15:00:00+09:00");
// console.log(d);

// const date = new Date("2020-02-03T15:00:00+09:00");
// const timeNum = date.getTime();
// console.log(timeNum);
// const date2 = new Date(timeNum);
// console.log(date2);

// console.log(Date.now());
// console.log((new Date()).getTime());

// const r = /ab+c/;

// console.log(r.test("abbbbc"));
// console.log(r.test("Hello,abc world!"));
// console.log(r.test("ABC"));
// console.log(r.test("こんにちは"))

// const r = /^abc/;
// console.log(r.test("abcdefg"));
// console.log(r.test("hello,abcdefg"));

// console.log("Hello,abbbbbbc world! abbc".replace(/ab+c/,"foober"));
// console.log("Hello,abbbbbbc world! abbc".replace(/ab+c/g,"foobar"));

// const result = "Hello,abbbbbc world! abc".match(/a(b+)c/);
// if (result!==null) {
//     console.log(result[0])
//     console.log(result[1])
// }

// const result = "hello,abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
// if (result!==null) {
//     console.log(result.groups);
//     console.log(result[1]);
// }

// const result = "Hello,abbbbbbc world! abc".match(/a(b+)c/g);
// console.log(result);

// const map:Map<string,number> = new Map();
// map.set("foo",1234)

// console.log(map.get("foo"));
// console.log(map.get("bar"));

// const str = "Hello,world!"
// console.log(str.length);

// let val: {} = 123;
// val = "foobar";
// val = { num: 1234 };
// // val = null;
// // val = undefined;
// console.log(val);
