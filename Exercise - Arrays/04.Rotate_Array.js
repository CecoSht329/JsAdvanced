function solve(collection){

    let rotations = collection.pop();

    for (let i = 0; i < rotations % collection.length; i++) {
        const lastElement = collection.pop();
        collection.unshift(lastElement);
    }
    console.log(collection.join(' '));
}

// solve(['1', 
// '2', 
// '3', 
// '4', 
// '2']
// );