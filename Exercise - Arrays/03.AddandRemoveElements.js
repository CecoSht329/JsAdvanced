function solve(commands) {
    let initialNumber = 1;
    let numbers = Array();

    for (let i = 0; i < commands.length; i++) {
        
        if (commands[i] === 'add') {
            numbers.push(initialNumber);
        }else if(commands[i] === 'remove'){
            numbers.pop();
        }
        initialNumber++;
    }
    let result = numbers.length > 0 ? numbers.join('\n') : 'Empty';
    console.log(result);
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);