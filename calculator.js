const calculationPane   = document.getElementById('calculationPane');
const numbers           = document.getElementsByClassName('number');
const operations        = document.getElementsByClassName('operations');
const equals            = document.getElementById('equals');
const CE                = document.getElementById('CE');
const decimalPoint      = document.getElementById('decimalPoint');
let number1, 
    number2,
    operationType,
    calculationComplete = false,
    total = 0,
    decimalCount = 0;

const calculate         = (operationType, number1, number2) => {
    switch (operationType) {
        case 'divide':
            return number1 / number2;
        case 'multiply':
            return number1 * number2;
        case 'subtract':
            return number1 - number2;
        case 'add':
            return number1 + number2;
    }
};

for (const number of numbers) {
    number.addEventListener('click', function() {
        if (calculationComplete) {
            calculationPane.innerHTML = '';
            calculationComplete = false;
        }
        calculationPane.innerHTML += number.innerHTML.toString();
    })
}

for (const operation of operations) {
    operation.addEventListener('click', function() {
        operationType = operation.id;
        number1 = Number(calculationPane.innerHTML);
        decimalCount = 0;
        document.getElementById('calculationPane').innerHTML = '';
    });
};

decimalPoint.addEventListener('click', function() {
    if (decimalCount < 1) {
        calculationPane.innerHTML += '.';
        decimalCount++;
    } else {
        alert('Cannot add more than one decimal point');
    }
});

equals.addEventListener('click', function() {
    number2 = Number(calculationPane.innerHTML);
    calculationPane.innerHTML = calculate(operationType, number1, number2).toString();
    calculationComplete = true;
    decimalCount = 0;
});

CE.addEventListener('click', function() {
    calculationPane.innerHTML = '';
    decimalCount = 0;
});
