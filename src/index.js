import { hexadecimal } from "./utils/index.js";

function decimalToHex(value) {
  const sequence = (value, array = []) => {
    const mod = value % 16;
    value = parseInt(value / 16);

    hexadecimal.map(number => mod == number.dec && array.push(number.hex));

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
          char == number.hex && newArray.push(number.dec)));

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

  return binary;
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

function decimalToOctal(value) {
  const calc = (value, array = []) => {
    if (value <= 0)
      return array.reverse();

    array.push(value % 8);

    return calc(parseInt(value / 8), array);
  }

  const mapping = (value, octal = "", index = 0) => {
    if (index >= value.length)
      return parseInt(octal);

    return mapping(value, octal += value[index], index += 1);
  }

  const array = calc(value);

  return mapping(array);
}

function octalToDecimal(value) {
  const mapping = (value, array = [], index = 0) => {
    if (index >= value.length)
      return array.reverse();

    array.push(value[index]);

    return mapping(value, array, index += 1);
  }

  const calc = (value, index = 0, result = 0) => {
    if (index >= value.length)
      return result;

    result += array[index] * Math.pow(8, index);

    return calc(value, index += 1, result);
  }

  const array = mapping(value.toString());

  return calc(array);
}

function hexToBinary(value) {
  const calcBinary = (value, array = []) => {
    if (value <= 1) {
      array.push(parseInt(value % 2));

      return array.reverse();
    }

    array.push(parseInt(value % 2));
    return calcBinary(value / 2, array);
  }

  //CORRIGIR
  //criar uma função própria para esse caso, pois apresenta incongruências
  const decimal = hexToDecimal(value);
  const result = calcBinary(decimal.toString());

  let binary = "";

  result.map(number => binary += number);

  return binary;
}

function binaryToHex(value) {
  const mapping = (value, index = 0, array = []) => {
    const conc = (value) => value.length >= 4 ? value : conc(value = "0" + value);

    if (index >= value.length)
      return array;

    if (value[index].length < 4)
      value[index] = conc(value[index]);

    array.push(value[index]);

    return mapping(value, index += 1, array);
  }

  value = value.toString().replace(/(.{4})/g, "$1 ").trim().split(" ");
  
  const bits = mapping(value);

  let hex = "";

  bits.map(bit => {
    binaryToDecimal(bit) <= 9 ? hex += binaryToDecimal(bit) : 
    hexadecimal.map(number => bit == number.bit && (hex += number.hex))
  });

  return hex;
}

export default {
  decimalToHex,
  hexToDecimal,
  decimalToBinary,
  binaryToDecimal,
  decimalToOctal,
  octalToDecimal,
  hexToBinary,
  binaryToHex
}