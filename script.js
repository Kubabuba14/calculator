const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

// Add Event Listners for numbers, operators and decimal buttons

inputBtns.forEach((inputBtn) => {
    inputBtn.addEventListener('click', () => {
        if (inputBtn.classList.length === 0 || inputBtn.classList.contains('operator')) {
            sendNumberValue(inputBtn.value);
        } else if (inputBtn.classList.contains('decimal')) {
            sendNumberValue();
        }
    });
});

