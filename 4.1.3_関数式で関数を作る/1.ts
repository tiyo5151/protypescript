type Human = {
  height: number;
  weight: number;
};
const calcBMI = function(human: Human): number {
  return human.weight / human.height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
// 21.266540642722116 と表示される
console.log(calcBMI(uhyo));