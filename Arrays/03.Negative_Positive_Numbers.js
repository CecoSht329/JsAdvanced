function solve(numbers) {

    let negatives = numbers.filter(x => {
        return x < 0;
    }); 
    let positives = numbers.filter(x => {
        return x >= 0;
    });

    negatives.reverse().forEach(x => {
        console.log(x);
    });
    positives.forEach(x => {
        console.log(x);
    });
}

// solve([3, -2, 0, -1]);