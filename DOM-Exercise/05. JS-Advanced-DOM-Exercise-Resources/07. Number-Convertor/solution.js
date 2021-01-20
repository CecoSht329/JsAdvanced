function solve() {

    const selectMenuTo = document.getElementById('selectMenuTo');

    document
    .querySelector("#container > button")
    .addEventListener('click', convert);


    function convert() {
        let inputNumber = Number(document.getElementById('input').value);
        let result;

        if (selectMenuTo.value === 'binary') {
            result = decimalToBinary(inputNumber);
        } else if (selectMenuTo.value === 'hexadeicmal') {
            result = decimalToHexadeicmal(inputNumber);
        }

        appendresult(result);
    }

    function appendresult(result) {
        document.getElementById('result').value = result;
    }

    function decimalToBinary(inputNumber) {
        return (inputNumber >>> 0).toString(2);
    }

    function decimalToHexadeicmal(inputNumber) {
        return inputNumber.toString(16).toUpperCase();
    }

    function createSelectMenuOptions() {
        let binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';

        let hexadeicmalOption = document.createElement('option');
        hexadeicmalOption.textContent = 'Hexadeicmal';
        hexadeicmalOption.value = 'hexadeicmal';

        selectMenuTo.appendChild(binaryOption);
        selectMenuTo.appendChild(hexadeicmalOption);
    }

    createSelectMenuOptions();
}