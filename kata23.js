function surviveFirst(str) {
  let first = str[0]
  let substr  = str.substring(1, str.length)
  let rest = ''
  for (let i = 0; i < substr.length; i++) {
    rest += substr[i].replace(substr[i], '*')
  }
  return first + rest
}

console.log(surviveFirst('abcde'))