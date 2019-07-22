export function shuffleArray (array) {
  let currentIndex = array.length
  let randomIndex
  let temporaryValue

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function generateNumericSequence (sequenceLength) {
  return Array(sequenceLength)
    .fill(0)
    .map((value, index) => index + 1)
}
