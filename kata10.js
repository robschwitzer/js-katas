function incrementString(string) {
  if(isNaN(parseInt(string[string.length - 1]))) {
    return string + '1'
  }
  let letters = string.split('').filter(i => isNaN(i)).join('')
  let numbers = string.split('').filter(i => !isNaN(i)).join('')
  let nums =+ numbers + 1
  if (numbers.length > nums.toString().length) {
    let zeros
    for(i of numbers) {
      zeros += '0'
    }
    return letters + (zeros + nums).slice(-numbers.length)
  }
  else {
    return letters + nums
  }
}

console.log(incrementString('fooo00001'))

