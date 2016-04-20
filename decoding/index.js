const x = 'abcdefghijklmnopqrstuvwxyz';
const letters = (x + x.toUpperCase()).split('').concat('.', ',', '?', ' ')
const specLetters = '!@#$%^&*()_+-'
console.log(letters.length)
const coding = (word) => {
    const answer = 
        word.split('').map((n, i)  => {
            return specLetters.split('').indexOf(n) === -1 ? letters[(2 * (i + 1) * (letters.indexOf(n) + 1) - 1) % 65] : n
        })
    return answer.join('')
}
module.exports = {
    coding: coding
}
