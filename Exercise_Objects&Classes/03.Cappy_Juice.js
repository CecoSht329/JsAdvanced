function solve(input) {
    let juices = {};
    let juicesProduced = {};
    input.forEach(fruitQuantity => {
        let [fruit, quantity] = fruitQuantity.split(' => ');
        if (!juices[fruit]) {
            juices[fruit] = 0;
        }
        juices[fruit] += Number(quantity);
        if (juices[fruit] >= 1000) {
            let juiceCount = 0;
            while (juices[fruit] >= 1000) {
                juices[fruit] -= 1000
                juiceCount++;
            }
            if (!juicesProduced[fruit]) {
                juicesProduced[fruit] = 0
            }
            juicesProduced[fruit] += juiceCount;
        }
    });

    for (const fruit in juicesProduced) {
       console.log(`${fruit} => ${juicesProduced[fruit]}`);
    }
}


solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);