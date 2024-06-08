class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.name);      // "uhyo" が表示される
console.log(uhyo.isAdult()); // true が表示される