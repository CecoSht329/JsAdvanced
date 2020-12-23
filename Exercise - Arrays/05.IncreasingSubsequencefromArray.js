function solve(collection) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    // let increasingSequence = Array();
    for (let i = 0; i < collection.length; i++) {
        const currentElement = collection[i];
        if (currentElement >= biggestNum) {
            biggestNum = currentElement;
            // increasingSequence.push(currentElement);
            console.log(biggestNum);
        }
    }
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    10,
    12, 
    3, 
    2, 
    24]
    
);