function solve(matrix) {
    let pairs = 0;
    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) {
                pairs++;
            }

            if (matrix[i + 1] && el === matrix[i + 1][j]) {
                pairs++;
            }
        });
    });
    console.log(pairs);
}

// solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]

// );