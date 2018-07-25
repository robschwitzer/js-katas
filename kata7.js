function titleCase(title, minorWords) {
  title = title.split(' ').map(item => item.toLowerCase())
  minorWords = minorWords || ''
  minorWords = minorWords.split(' ').map(item => item.toLowerCase())
  return title.map((item, index) => {
    if (minorWords.indexOf(item) === -1 || index === 0) {
      return item.charAt(0).toUpperCase() + item.slice(1)
    } else {
      return item
    }
  })
  .join(' ');
}


console.log(titleCase(''))
console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))