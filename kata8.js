function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map((a, b, c) => {
      if (c.indexOf(a) === c.lastIndexOf(a)) {
        return '('
      } else {
        return ')'
      }
    })
    .join('');
}

console.log(duplicateEncode('recede'))
