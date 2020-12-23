function solve(collection) {

    collection
    .sort()
    .sort(function (a, b) {
        return a.length - b.length;
    })
    console.log(collection.join('\n'));
}

    solve(['alpha', 
    'beta', 
    'gamma']
    );