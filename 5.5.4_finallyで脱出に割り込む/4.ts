console.log(sum(100));

function sum(max: number): number {
  try {
    let result = 0;
    for (let i = 1; i <= max; i++) {
      result += i;
    }
    return result;
  } finally {
    console.log("sumから脱出します！！！！");
  }
}