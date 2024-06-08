type Human = {
  name: string;
  age: number;
};

type HumanKeys = keyof Human;

let key: HumanKeys = "name";
key = "age";
// エラー: Type '"hoge"' is not assignable to type 'keyof Human'.
key = "hoge";