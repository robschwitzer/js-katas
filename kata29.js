//reverse a string and make a # sandwich

function reverse(str){
  return '#' + Array.from(str).reverse().join('') + '#'
}


console.log(reverse('Hello'))