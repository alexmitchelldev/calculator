const   calculationPane = document.getElementById('calculationPane'),
        numbers         = document.getElementsByClassName('number'),
        operations      = document.getElementsByClassName('operations'),
        equals          = document.getElementById('equals'),
        CE              = document.getElementById('CE'),
        decimalPoint    = document.getElementById('decimalPoint'),
        calculate       = (operationType, number1, number2) => {
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

let number1, 
    number2,
    operationType,
    previousCalcuation = false,
    decimalCount = 0;

for (const number of numbers) {
    number.addEventListener('click', function() {
        if (previousCalcuation) {
            calculationPane.innerHTML = '';
            previousCalcuation = false;
        }
        calculationPane.innerHTML += number.innerHTML.toString();
    })
};

for (const operation of operations) {
    operation.addEventListener('click', function() {
        operationType = operation.id;
        number1 = Number(calculationPane.innerHTML);
        decimalCount = 0;
        calculationPane.innerHTML = '';
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
    previousCalcuation = true;
    decimalCount = 0;
});

CE.addEventListener('click', function() {
    calculationPane.innerHTML = '';
    decimalCount = 0;
});
