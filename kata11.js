function permutations(string) {
  let arr = []
  if (string.length < 2) return Array.from(string)
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (string.indexOf(char) != i) continue
    let remainingString = string.slice(0, i) + string.slice(i + 1, string.length)
    for (let subPermutation of permutations(remainingString))
      arr.push(char + subPermutation)
    }
  return arr
}

console.log(permutations('A')) //['aba', 'baa', 'aab']