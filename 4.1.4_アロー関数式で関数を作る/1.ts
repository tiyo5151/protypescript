type Human = {
  height: number;
  weight: number;
};
const calcBMI = ({
  height, weight
}: Human): number => {
  return weight / height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
// 21.266540642722116 と表示される
console.log(calcBMI(uhyo));