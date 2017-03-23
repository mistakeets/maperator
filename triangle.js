// const makeShape = (letter) => {
//   if (letter === 'A') {
//     return 'A\n'
//   }

const letter = "F"

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  // const alphabet = "*@#$%^&*()<!,.?/:;#${}@$^&%@|".split('')
const whiteSpace = ' '
const middleOfShape = alphabet.indexOf(letter) + 1

let tempStorage = []
for (let i = 0; i < middleOfShape; i++) {
  tempStorage[i] = []
}

for (let i = 1; i < middleOfShape; i++) {
  tempStorage[i].push(alphabet[i])
}

for (let i = 0; i < middleOfShape; i++) {
  // modifying value for new Array to manipulate shape
  const spacesBeforeAndAfter = new Array((middleOfShape) + 1).join(whiteSpace)
  tempStorage[i].push(alphabet[i])
  tempStorage[i].unshift(spacesBeforeAndAfter)
  tempStorage[i].push(spacesBeforeAndAfter)
  console.log(tempStorage) // log contents of array
}

tempStorage[1].splice(2, 0, whiteSpace)
for (let i = 2; i < middleOfShape; i++) {
  const spacingMultiple = (3 + (i * 2) - 3)
  const spacesBetweenLetters = new Array(spacingMultiple).join(whiteSpace)
  tempStorage[i].splice(2, 0, spacesBetweenLetters)
}

let result = []
for (let i = 0; i < middleOfShape; i++) {
  const assembleLine = tempStorage[i].join('')
  result.push(assembleLine)
}
for (let i = result.length - 2; i >= 0; i--) {
  result.push(result[i])
}
//return result.join("\n") + "\n"
console.log(result.join("\n") + "\n")
  // }