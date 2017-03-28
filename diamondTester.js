const letter = 'E'
const element = (letter.charCodeAt(0) - 64) * 2 - 1
const middle = Math.floor(element / 2)
let shape = []

for (let i = 0; i <= middle; i++) {
  shape.push(i)
}

for (let i = middle - 1; i >= 0; i--) {
  shape.push(i)
}

console.log('whats in the array?-->', shape)

let output = ''
shape.forEach((i) => {
  convertIt = new Array(element).fill('*')
  convertIt[middle - i] = String.fromCharCode(i + 65)
  convertIt[middle + i] = String.fromCharCode(i + 65)
  console.log('what about the other array?-->', convertIt)
  output += convertIt.join('') + '\n'
})

console.log(output)