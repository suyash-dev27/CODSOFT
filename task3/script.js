// script.js
let display = document.getElementById('display');
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch {
    alert("Invalid Expression");
  }
}

function squareRoot() {
  try {
    let value = parseFloat(display.value);
    if (value >= 0) {
      display.value = Math.sqrt(value);
    } else {
      alert("Invalid Input for √");
    }
  } catch {
    alert("Error");
  }
}

// Memory functions
function memoryAdd() {
  memory += Number(display.value) || 0;
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}
