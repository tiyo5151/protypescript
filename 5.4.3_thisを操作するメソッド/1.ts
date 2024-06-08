class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo = new User("uhyo", 25);
const john = new User("John Smith", 15);

console.log(uhyo.isAdult()); // true が表示される

// uhyo.isAdultを、johnをthisとして呼び出す
console.log(uhyo.isAdult.apply(john, [])); // false が表示される