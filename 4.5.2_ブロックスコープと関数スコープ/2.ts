function sabayomi(age: number) {
  if (age >= 20) {
    const lie = age - 5;
    return lie;
  }
  // エラー: Cannot find name 'lie'.
  console.log(lie);
  return age;
}