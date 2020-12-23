function solve(numbers) {

    let smallest = Array();

    for (let i = 0; i < 2; i++) {

        let min = Math.min.apply(Math, numbers);
        smallest.push(min);

        const index = numbers.indexOf(min);
        if (index > -1) {
            numbers.splice(index, 1);
        }
    }
    console.log(smallest.join(' '));
}
// solve([3, 0, 10, 4, 7, 3]);