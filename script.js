let currentInput = '';
  let currentOperator = '';
  const display = document.getElementById('display');

  function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
  }

  function setOperator(operator) {
    currentOperator = operator;
    currentInput += ` ${operator} `;
    display.value = currentInput;
  }

  function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    display.value = '';
  }

  function calculateResult() {
    const expression = currentInput.split(' ');
    const num1 = parseFloat(expression[0]);
    const num2 = parseFloat(expression[2]);
    switch (currentOperator) {
      case '+':
        display.value = num1 + num2;
        break;
      case '-':
        display.value = num1 - num2;
        break;
      case '*':
        display.value = num1 * num2;
        break;
      case '/':
        display.value = num1 / num2;
        break;
      default:
        display.value = 'Syntax Error';
    }
    currentInput = '';
    currentOperator = '';
  }