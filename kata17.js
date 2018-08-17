// given two numbers, if they are not of equal length, prefix the shorter number with enough zeros to match the length of the longer number

let match = (num1, num2) => {
  if (!num1 || !num2) {
    return 'missing args'
  } else {
    let smallerNum = Math.min(num1, num2).toString()
    let biggerNum  = Math.max(num1, num2).toString()
    let diff       = biggerNum.length - smallerNum.length
    if (num1.toString().length !== num2.toString().length) {
      return '0'.repeat(diff) + smallerNum
    } else {
      return biggerNum
    }
  }
}

console.log(match(2222,2))




