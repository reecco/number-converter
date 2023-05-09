import convert from "../src/index.js";

test("Convert a decimal value to hexadecimal.", () => {
  expect(convert.decimalToHex(255)).toBe("FF");
});

test("Convert a hexadecimal value to decimal.", () => {
  expect(convert.hexToDecimal("FF")).toBe(255);
});

test("Convert a decimal to binary.", () => {
  expect(convert.decimalToBinary(654)).toBe(1010001110);
});

test("Convert a binary to decimal.", () => {
  expect(convert.binaryToDecimal(10)).toBe(2);
});