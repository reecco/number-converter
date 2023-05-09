import { hexadecimal } from "./utils/index.js";

function decimalToHex(value) {
  const sequence = (value, array = []) => {
    const mod = value % 16;
    value = parseInt(value / 16);

    hexadecimal.map(number => mod == number.dec && array.push(number.letter));

    if (mod <= 9)
      array.push(mod);

    if (value <= 0) {
      let hex = "";
      array.reverse().map(char => hex += char);

      return hex;
    }

    return sequence(value, array);
  }

  return sequence(value);
}

function hexToDecimal(value) {
  const mapping = (value, index = 0, array = []) => {
    if (index >= value.length)
      return array.reverse();

    array.push(value.charAt(index).toUpperCase());

    return mapping(value, (index += 1), array);
  };

  const replacedArray = (array, newArray = []) => {
    array.map(char =>
      char <= 9 ? newArray.push(char) :
        hexadecimal.map(number =>
          char == number.letter && newArray.push(number.dec)));

    return newArray;
  }

  const hex = mapping(value);

  const array = replacedArray(hex);

  let result = 0;
  let index = 0;

  array.filter(char => {
    result += char * (Math.pow(16, index));
    index += 1;
  });

  return result;
}

function decimalToBinary(value) {
  const sequence = (value, array = []) => {
    if (value <= 1) {
      array.push(parseInt(value % 2));

      return array.reverse();
    }

    array.push(parseInt(value % 2));
    return sequence(value / 2, array);
  }

  const result = sequence(value);

  let binary = "";

  result.map(number => binary += number);

  return parseInt(binary);
}

function binaryToDecimal(value) {
  const mapping = (value, index = 0, array = []) => {
    if (index >= value.length)
      return array.reverse();

    array.push(value.charAt(index));

    return mapping(value, (index += 1), array);
  }

  const calc = (array, index = 1, result = 0, pos = 0) => {
    if (pos >= array.length)
      return result;
      
    result += (array[pos] * ((index *= 2) / 2));

    return calc(array, index, result, pos += 1);
  }

  const array = mapping(value.toString());

  return calc(array);
}

export default {
  decimalToHex,
  hexToDecimal,
  decimalToBinary,
  binaryToDecimal
}