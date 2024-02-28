function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function backspace() {
    let displayValue = document.getElementById('display').innerText;
    document.getElementById('display').innerText = displayValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    let result = eval(document.getElementById('display').innerText);
    document.getElementById('display').innerText = result;
}