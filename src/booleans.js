function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
  return !(a && b) && (a || b) ;
};

function truthiness(a) {
  if (a) return true;
  return false;
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 === 1;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return Math.sqrt(a) === Math.floor(Math.sqrt(a));
};

function startsWith(char, string) {
  return char === string[0];
};

function containsVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if(string[j] === vowels[i]) return true;
    }
  }

  return false;
};

function isLowerCase(string) {
  const newString = string.toLowerCase();
  return string === newString;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
