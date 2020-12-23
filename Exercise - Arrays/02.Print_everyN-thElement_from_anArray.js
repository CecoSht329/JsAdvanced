function solve(collection) {
    let step = Number(collection.pop());
    for (let i = 0; i < collection.length; i += step) {

        console.log(collection[i]);
    }
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
);

solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);