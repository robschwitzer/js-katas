// lottery number generator
// nums 1 thru 3: fall between 1-23
// nums 4 thru 6: fall between 24-47
// resulting array has even mix of odd and even numbers
// sum of all numbers falls between the range of 100 - 158

let inRange = (array) => {
  let sum  = array.reduce((a, b) => a + b, 0)
  let even = 0
  let odd  = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even++
    } else {
      odd++
    }
  }
  return even === odd && sum >= 100 && sum <= 158
}

let generate = (total, min, max, array) => {
  let results = array ? array : []
  for (let i = 0; i < total; i++) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    if (!results.includes(num)){
      results.push(num)
    } else {
      generate (total, min, max, results)
      break
    }
  }
  return results
}

let draw = () => {
  let top     = generate(3, 1, 23)
  let bottom  = generate(3, 24, 47)
  let numbers = [].concat.call(top, bottom)
  if (inRange(numbers)) {
    return numbers.sort((a, b) => a - b)
  }
  return draw()
}

console.log(draw())