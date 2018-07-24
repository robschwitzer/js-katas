const isValidWalk = function (walk) {
  let turns = {
    n: 0,
    s: 0,
    w: 0,
    e: 0
  };

  for (i of walk) {
    turns[i]++
  }
  return (walk.length === 10) && (turns.n - turns.s === 0) && (turns.w - turns.e === 0);
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //false


