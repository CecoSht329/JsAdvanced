function calculatePrice(fruit, grams, pricePerKilo) {
    if (typeof (fruit) == 'string'
        && typeof (grams) == 'number'
        && typeof (pricePerKilo) == 'number') {

        let kilograms = grams / 1000;
        let totalPrice = pricePerKilo * kilograms;

        console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
    }
}

// calculatePrice('orange', 1563, 2.35);