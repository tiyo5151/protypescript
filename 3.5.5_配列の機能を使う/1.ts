const arr = [1, 10, 100];
arr.push(1000);
console.log(arr); // [1, 10, 100, 1000] と表示される

// これはコンパイルエラー:
// Argument of type '"foobar"' is not assignable to parameter of type 'number'.
arr.push("foobar");