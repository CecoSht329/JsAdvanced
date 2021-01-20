function addItem() {
    let text = document.getElementById('newItemText');
    let data = document.getElementById('newItemValue');

    let select = document.getElementById('menu');
    // let option = `<option value=${data.value}>${text.value}</option>`;
    let option = document.createElement('option');
    option.value = data.value;
    option.innerText = text.value;

    // select.innerHTML += option;
    select.appendChild(option);

    text.value = '';
    data.value = '';
}