function solve() {
    let expression = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    document.querySelector('.keys').addEventListener('click', symbolClick);
    document.querySelector('.clear').addEventListener('click', clear);

    function clear() {
        expression.textContent = '';
        result.textContent = '';
    }

    function symbolClick(event) {
        let buttonPressed = event.target.value;

        switch (buttonPressed) {
            case '/':
            case '*':
            case '+':
            case '-':
                expression.textContent += ` ${buttonPressed} `
                break;
            case '=':
                let [leftOperand,
                    operator,
                    rightOPerand]
                    = expression.textContent.split(' ');

                if (!rightOPerand || !operator) {
                    result.textContent = 'NaN';
                } else {
                    result.textContent = calcualteResult(+leftOperand, operator, +rightOPerand);
                }
                break;
            default:
                expression.textContent += buttonPressed;
                // break;
        }

    }

    function calcualteResult(leftOperand, operator, rightOPerand) {
        switch (operator) {
            case '*':
                return leftOperand * rightOPerand;

            case '/':
                return leftOperand / rightOPerand;

            case '+':
                return leftOperand + rightOPerand;

            case '-':
                return leftOperand - rightOPerand;

        }
    }

}