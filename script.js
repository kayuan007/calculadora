function appendNumber(number) {
    document.getElementById('txtResultado').value += number;
}

function appendOperator(operator) {
    document.getElementById('txtResultado').value += operator;
}

function calculate() {
    try {
        var resultado = eval(document.getElementById('txtResultado').value);
        document.getElementById('txtResultado').value = resultado;
    } catch (error) {
        document.getElementById('txtResultado').value = 'Erro';
    }
}

function clearDisplay() {
    document.getElementById('txtResultado').value = '';
}