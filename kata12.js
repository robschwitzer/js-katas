function total(num){
  let arr = []
  for (let i = 1; i < num + 1; i++) {
    arr.push(i)
  }
  return arr.reduce((a, b) => a + b, 0)
}

console.log(total(10)) //55