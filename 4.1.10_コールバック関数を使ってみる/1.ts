type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "John Smith", age: 15 }
];

const names = users.map(getName);
console.log(names); // ["uhyo", "John Smith"] と表示される