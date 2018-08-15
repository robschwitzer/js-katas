function percentageSumArray(arr){
  if (!arr || arguments.length !== 1) {
    return false
  } else {
    let total = 0
    let noZeros = []
    for (let i of arr) {
      if (i !== 0) { noZeros.push(i) }
    }
    noZeros = noZeros.length
    for (let i in arr) { total += arr[i] }
      if (!arr || arr === undefined || total <= 0) {
        return false
      }
    arr = (total * noZeros) / 100
    let percentage = Number(arr.toFixed(2))
    if (!isNaN(percentage)) {
      return percentage
    } else {
      return false
    }
  }
}

console.log(percentageSumArray([1,2,3]))