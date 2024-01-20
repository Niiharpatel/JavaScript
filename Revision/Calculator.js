const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const Calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(Calculator(5, 2, add));

// Here, calculator function is higher order function..
// and add function is callback function..
