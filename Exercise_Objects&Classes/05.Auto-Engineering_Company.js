function solve(input) {
    let result = {};
    input.forEach(element => {
        let [brand, model, producedCars] = element.split(' | ');
        producedCars = Number(producedCars);
        if (!result[brand]) {
            result[brand] = {};
        }

        if (!result[brand][model]) {
            result[brand][model] = 0;
        }
        result[brand][model] += producedCars;
    });

    Object.keys(result).forEach(brand => {
        console.log(brand);
        Object.keys(result[brand]).forEach(model => {
            console.log(`###${model} -> ${result[brand][model]}`);
        })
    })
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);