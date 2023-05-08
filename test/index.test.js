import convert from "../src/index.js";

test("Convert a decimal value to hexadecimal.", () => {
  expect(convert.decimalToHex(255)).toBe("FF");
});

test("Convert a hexadecimal value to decimal.", () => {
  expect(convert.hexToDecimal("FF")).toBe(255);
});