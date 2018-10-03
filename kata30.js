function rectangle(char, width, height) {
  let line = char.repeat(width)
  return (line + '\n').repeat(height - 1) + line
}

console.log(rectangle('*', 8, 10))