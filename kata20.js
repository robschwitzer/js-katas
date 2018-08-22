function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function(string) {
    return String.fromCharCode((string <= "Z" ? 90 : 122) >= (string = string.charCodeAt(0) + 13) ? string : string - 26)
  })
}

console.log(rot13('rot13 test example'))