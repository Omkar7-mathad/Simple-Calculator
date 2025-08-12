const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        
        display.value = eval(display.value);
    } catch {
        alert("Invalid input");
        clearDisplay();
    }
}


document.addEventListener('keydown', function(event) {
    const allowedKeys = "0123456789+-*/.()";
    if (allowedKeys.includes(event.key)) {
        
        display.value += event.key;
    } else if (event.key === 'Enter') {
        
        calculate();
    } else if (event.key === 'Backspace') {
        
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        
        clearDisplay();
    }
});


