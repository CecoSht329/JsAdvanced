function gcd_two_numbers(firstNumber, secondNumber) {
    if ((typeof firstNumber === 'number') || (typeof secondNumber === 'number')) {
        firstNumber = Math.abs(firstNumber);
        secondNumber = Math.abs(secondNumber);
        while (secondNumber > 0) {
            let currentDivider = secondNumber;
            secondNumber = firstNumber % secondNumber;
            firstNumber = currentDivider;
        }
        console.log(firstNumber);
    }
}

// gcd_two_numbers(2154, 458);

