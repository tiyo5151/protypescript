type F2 = (arg: string, arg2: string) => boolean;
// エラー: Type '(num: number) => void' is not assignable to type 'F2'.
const fun: F2 = (num: number): void => console.log(num);