function palindrome(text){
  text = text.toLowerCase().replace(/\W/g, '')
  if (text.length < 3) {
    return false
   }
  return text === text.split('').reverse().join('')
}

console.log(palindrome('aaaa'))