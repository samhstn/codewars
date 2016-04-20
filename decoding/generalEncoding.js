const alpha = 'abcdefghijklmnopqrstuvwxyz';
const letters = (alpha + alpha.toUpperCase() + '0123456789' + '.,? ').split('');

const decodeALetter = l => {
  var letter = letters.indexOf(l)
  return !(letter % 2) ? letters[+(letter)/2 + 33] : letter > 0 ? letters[+(letter - 1)/2] : l
}

device.decode = word =>
  (word.split('').map((l, i) => {
    while (i >= 0) {
      var l = decodeALetter(l);
      i--;
    }
    return l
  }).join(''))
