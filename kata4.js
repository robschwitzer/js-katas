function createPhoneNumber(numbers){
  let arr = [];
  arr.push(`(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`)
  return arr.toString()
}

console.log(createPhoneNumber([6,0,4,2,1,7,7,3,3,8]))