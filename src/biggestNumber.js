// Write a function that takes a number as input and outputs the biggest number with the same set of digits.

const biggestNumber = number => {
  const numberToDigits = number => {
    const digits = [];
    let num = number;
    while (num) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  };

  const digitsToNumber = array => parseInt(array.join(''), 10);

  const digits = numberToDigits(number);
  digits.sort((a, b) => b - a);

  return digitsToNumber(digits);
};

module.exports = biggestNumber;

// input 562 ==> 652
console.log(biggestNumber(562));
console.log(biggestNumber(1));
console.log(biggestNumber(20));
console.log(biggestNumber(2345));
console.log(biggestNumber(901821));
// interger ==> integer

// x > 0
