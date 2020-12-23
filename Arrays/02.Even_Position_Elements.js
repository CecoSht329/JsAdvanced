function solve(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i += 2) {
        const element = numbers[i];

        result.push(element);
    }

    console.log(result.join(' '));
}

// solve(['5', '10', '16']);