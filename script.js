
const display = document.getElementById('result-display')

function appendToDisplay (value) {
  display.value += value;
}

function clearDisplay () {
  display.value = '';
}

function calculator () {

  if (display.value == '' ) {
    display.value = 'ERROR';
  }
  try {
    display.value = eval(display.value);

  } catch (error) {
    display.value = 'ERROR'
  }

}