const R = require("ramda");

const numberString = process.argv[2];

console.log(stringCalc(numberString));
console.log(ramdaStringCalc(numberString));
console.log(ramdaStringCalc2(numberString));
console.log(ramdaStringCalc3(numberString));

function stringCalc(str) {
  return str
    .split(",")
    .map(Number)
    .filter(n => n < 1000)
    .reduce((acc, num) => acc + num, 0);
}

function ramdaStringCalc(str) {
  const splitByComma = R.split(",");
  const mappedToNumber = R.map(Number);
  const filteredUnder1000 = R.filter(n => n < 1000);
  return R.sum(filteredUnder1000(mappedToNumber(splitByComma(str))));
}

function ramdaStringCalc2(str) {
  const splitByComma = R.split(",");
  const mappedToNumber = R.map(Number);
  const filteredUnder1000 = R.filter(n => n < 1000);
  return R.pipe(splitByComma, mappedToNumber, filteredUnder1000, R.sum)(str);
}

function ramdaStringCalc3(str) {
  return R.pipe(
    R.split(","),
    R.map(Number),
    R.filter(n => n < 1000),
    R.sum
  )(str);
}