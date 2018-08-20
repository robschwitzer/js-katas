//obfuscate credit card number so that only the last 4 digits are visible

let obfuscate = (cc) => {
  cc              = cc.toString()
  let lastFour    = cc.slice(-4)
  let encryptedCC = lastFour.padStart(12, '*')

  if (cc.length !== 16 || cc[0] !== '4' && cc[0] !== '5') {
    return 'invalid credit card number'
  }

  if (cc[0] === '4') {
    this.cardType = 'visa',
    this.number = cc,
    this.encrypted = encryptedCC
  }

  if (cc[0] === '5') {
    this.cardType = 'mastercard',
    this.number = cc,
    this.encrypted = encryptedCC
  }
  return this.encrypted
}



console.log(obfuscate(4572007922784569))