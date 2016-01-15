factorial = x => x < 2 ? 1 : x * factorial(x-1);
alphabetise = str => str.split('').sort().join('');

console.log(alphabetise("bookkeeper"));
