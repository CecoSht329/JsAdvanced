function getSumOfDigits(inputNumber) {
    if (typeof (inputNumber) === 'number') {
        const arrayOfDigits = Array.from(String(inputNumber), Number);
        let sum = 0;
        let areEqual = true;
        for (let i = 0; i < arrayOfDigits.length - 1; i++) {
            sum += arrayOfDigits[i];
            if (arrayOfDigits[i] != arrayOfDigits[i + 1]) {
                areEqual = false;
            }
        }
        sum += arrayOfDigits[arrayOfDigits.length - 1];
        console.log(areEqual);
        console.log(sum);
    }
}

// getSumOfDigits(2222222);
