function double<T>(func: (arg: T) => T): (arg: T) => T {
    return (arg) => func(func(arg));
}
// エラー: Object is of type 'unknown'.
const plus2 = double(x => x + 1);