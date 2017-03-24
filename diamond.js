const Diamond = function() {}

Diamond.prototype.makeDiamond = function(letter) {

  if (letter == 'A') {
    return 'A\n'
  }

  const element = (letter.charCodeAt(0) - 64) * 2 - 1
  const middle = Math.floor(element / 2)
  let shape = []

  for (let i = 0; i <= middle; i++) {
    shape.push(i)
  }

  for (let i = middle - 1; i >= 0; i--) {
    shape.push(i)
  }

  let output = ''
  shape.forEach((i) => {
    convertIt = new Array(element).fill(' ')
    convertIt[middle - i] = String.fromCharCode(i + 65)
    convertIt[middle + i] = String.fromCharCode(i + 65)
    output += convertIt.join('') + '\n'
  })

  return output
}
module.exports = Diamond