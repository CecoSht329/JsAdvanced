function solve(input) {

    let towns = input
        .map(x => x.split(' <-> '))
        .reduce(
            (acumulator, currentValue) => {
                let currentTown = [currentValue[0]];
                let currentPopulation = Number(currentValue[1]);
                if (!acumulator.hasOwnProperty(currentValue[0])) {
                    acumulator[currentTown] = 0;
                }
                acumulator[currentTown] += currentPopulation;

                return acumulator;
            },
            {}
        );
    // for (const town in result) {
    //     console.log(town + ' : ' + result[town]);
    // }
    Object
    .keys(towns)
        .forEach(town => console.log(`${town} : ${towns[town]}`));
}



// solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// );