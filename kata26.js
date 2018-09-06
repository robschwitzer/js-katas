// kata to see if all numbers in array are below a certain limit
let smallEnough = (a, limit) => {
  return a.filter(x => x > limit).length === 0
}

console.log(smallEnough([78, 170, 11, 99], 180))