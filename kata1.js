function alphabetPosition(text) {
  let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  let result = [];
  text = text.replace(/\W*\d+/g, '').toLowerCase().split('');
  for (i in text) {
    let j = alphabet.indexOf(text[i]) + 1;
    if (j) result.push(j);
  }
  return result.join(' ')
}
alphabetPosition('the cat is out of the bag')