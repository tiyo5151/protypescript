// T は {
//   age: number;
// }
type T = Pick<{
  name: string;
  age: number;
}, "age">;