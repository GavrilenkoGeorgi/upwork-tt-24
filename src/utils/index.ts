export const generateCode = () => {

  // two parts: char and nums
  const randomLetter = () => String.fromCharCode(0 | Math.random() * 26 + 97)
  const randomNumber = () => Math.floor(Math.random() * 10)

  const charPart = []
  const numPart = []

  // assumed from the task description
  let charPartLength = 8
  let numPartLength = 4

  while (charPartLength > 0) {
    charPart.push(randomLetter().toUpperCase())
    charPartLength = charPartLength - 1
  }

  while (numPartLength > 0) {
    numPart.push(randomNumber())
    numPartLength = numPartLength - 1
  }

  return charPart.join('') + numPart.join('')

}
