import { hexadecimal } from "./utils/index.js";

function decimalToHex(value, array = []) {
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

  return decimalToHex(value, array);
}

function hexToDecimal(value, index = 0) {
  const mapping = (value, pos = 0, array = []) => {
    if (pos >= value.length)
      return array.reverse();

    array.push(value.charAt(pos).toUpperCase());

    return mapping(value, (pos += 1), array);
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

  array.filter(char => {
    result += char * (Math.pow(16, index));
    index += 1;
  });

  return result;
}

export default {
  decimalToHex,
  hexToDecimal
}