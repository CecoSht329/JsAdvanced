function solve(matrix) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => {
        let currentMax = Number.MIN_SAFE_INTEGER;

        row.forEach(num => {

            if (currentMax < num) {
                currentMax = num;
            }
        });

        if (maxNum < currentMax) {
            maxNum = currentMax;
        }
    });

    console.log(maxNum);
}

// solve([[20, 50, 10],
// [8, 33, 145]]
// );