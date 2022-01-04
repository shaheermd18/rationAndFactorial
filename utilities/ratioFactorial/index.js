const ratioOfNums = require("../ratio/index");
const factorialOfNum = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  let object = {
    ratio: ratioOfNums(num1, num2),
    factorial: factorialOfNum(num3),
  };
  return object;
};

module.exports = ratioAndFactorial;
