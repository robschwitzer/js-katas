let palindrome = (str) => {
  return str === str.split('').reverse().join('')
}

console.log(palindrome('racecar'))