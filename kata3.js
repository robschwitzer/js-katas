function digitalRoot(n) {
  let num = n.toString().split('');
  let arr = [];
  let result = [];
  for (i of num) {
    arr.push(Number(i))
  }
  let sum = arr.reduce((a, b) => a + b, 0).toString().split('')
  for (i of sum) {
    result.push(Number(i))
  }
  return result.reduce((a,b) => a + b, 0)
}

console.log(digitalRoot(942)) //6


//SORCERY !!!
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(942))

