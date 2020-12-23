function solve(matrix) {

    let initialSum = matrix[0].reduce(function (a, b) {
        return a + b;
    }, 0);
    let areEqual = true;
    for (let row = 0; row < matrix.length; row++) {
        const currentRow = matrix[row];
        const currentRowSum = currentRow.reduce(function (a, b) {
            return a + b;
        }, 0);
        if (initialSum !== currentRowSum) {
            areEqual = false;
            break;
        }
        const currentCol = new Array();
        for (let col = 0; col < matrix.length; col++) {
            currentCol.push(matrix[col][row]);
        }
        const currentColSum = currentCol.reduce(function (a, b) {
            return a + b;
        }, 0);
        if (initialSum !== currentColSum) {
            areEqual = false;
            break;
        }
    }
    console.log(areEqual);
}


// solve([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
// );

// solve([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]
// );

// solve([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]
// );