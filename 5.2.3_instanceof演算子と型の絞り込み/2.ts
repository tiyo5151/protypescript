type HasAge = {
  age: number;
}

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge) {
  if (customer instanceof User) {
    if (customer.name === "uhyo") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 1800;
}

const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 40 };
const uhyo = new User("uhyo", 26);

console.log(getPrice(customer1)); // 1000 と表示される
console.log(getPrice(customer2)); // 1800 と表示される
console.log(getPrice(uhyo));      // 0 と表示される