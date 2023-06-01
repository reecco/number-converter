import convert from "../src/index.js";

// test("Convert a decimal value to hexadecimal.", () => {
//   expect(convert.decimalToHex(193)).toBe("C1");
// });

// test("Convert a hexadecimal value to decimal.", () => {
//   expect(convert.hexToDecimal("FF")).toBe(255);
// });

// test("Convert a decimal to binary.", () => {
//   expect(convert.decimalToBinary(654)).toBe("01010001110");
// });

// test("Convert a binary to decimal.", () => {
//   expect(convert.binaryToDecimal("11000001")).toBe(193);
// });

// test("Convert a decimal to octal.", () => {
//   expect(convert.decimalToOctal(897)).toBe(1601);
// });

// test("Convert a octal to decimal.", () => {
//   expect(convert.octalToDecimal(43225)).toBe(18069);
// });

test("Convert a binary to hexadecimal", () => {
  expect(convert.hexToBinary("934")).toBe("0100100110100")
});

test("Convert a binary to hexadecimal", () => {
  expect(convert.binaryToHex("0100100110100")).toBe("934")
});