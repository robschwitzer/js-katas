//square root without using math library

let sqaureRoot = (n) => {
  for (let i = 1; i < n; i++) {
    if (i * i === n) {
      return i
    }
  }
}

console.log(sqaureRoot(400))