function solve(strings){

    let delimeter = strings.pop();
    console.log(strings.join(delimeter));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);