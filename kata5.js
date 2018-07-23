var moveZeros = function (arr) {
  let zeros = []
  let value = 0
  for (i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i])
    }
  }
  arr = arr.filter(item => item !== value)
  return arr.concat(zeros)
}

console.log(moveZeros([false,0,0,0,0,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0])
