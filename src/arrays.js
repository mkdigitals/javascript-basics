const getNthElement = (index, array) => {
  let actualIndex = index % array.length;
  return array[actualIndex];
};

const arrayToCSVString = array => {
  let string = '';
  for (let i = 0; i < array.length - 1; i += 1) {
    string += array[i] + ',' ;
  }
  string += array[array.length - 1];
  return string;
};

const csvStringToArray = string => {
  const array = [];
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ',') {
      array.push(string[i]);
    }
  }
  return array;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let array2 = Array.from(array);
  array2.push(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  let stringArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    stringArray.push(numbers[i].toString());
  }
  return stringArray;
};

const uppercaseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i += 1) {
    strings[i] = strings[i].toUpperCase();
  }
  return strings;
};

const reverseWordsInArray = strings => {
  var reversedString = '';
  for (let i = 0; i < strings.length; i += 1) {
    reversedString = '';
    for (let j = strings[i].length - 1; j >= 0; j -= 1) {
      reversedString += strings[i][j];
    }
    strings[i] = reversedString;
  }
  return strings;
};

const onlyEven = numbers => {
  let evenNumbers = numbers.filter(number => number % 2 === 0);
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  let array2 = Array.from(array);
  removeNthElement(index, array2);
  return array2;
};

const elementsStartingWithAVowel = strings => {
  const stringsStartingWithVowel = strings.filter(
    element =>
      element[0] === 'a' ||
      element[0] === 'e' ||
      element[0] === 'i' ||
      element[0] === 'o' ||
      element[0] === 'u' ||
      element[0] === 'A' ||
      element[0] === 'E' ||
      element[0] === 'I' ||
      element[0] === 'O' ||
      element[0] === 'U'
  );
  return stringsStartingWithVowel;
};

const removeSpaces = string => {
  let newString = '';
  let i = 0;
  while (i < string.length) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
    i += 1;
  }
  return newString;
};

const sumNumbers = numbers => {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const sortByLastLetter = strings => {
  strings.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
