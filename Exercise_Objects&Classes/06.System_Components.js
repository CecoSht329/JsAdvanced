function solve(input) {
    let result = {};

    input.forEach(line => {
        let [systemName, component, subComponent] = line.split(' | ');

        if (!result[systemName]) {
            result[systemName] = {};
        }

        if (!result[systemName][component]) {
            result[systemName][component] = [];
        }

        result[systemName][component].push(subComponent);
    });

    Object.entries(result).sort((curr, next) => {
        return Object.entries(next[1]).length - Object.entries(curr[1]).length || curr[0].localeCompare(next[0]);
    }).forEach(([system, componenets]) => {
        console.log(system);
        Object.entries(componenets).sort((curr, next) =>{
            return next[1].length - curr[1].length;
        }).forEach(([component, subComponent])=>{
            console.log(`|||${component}`);
            subComponent.forEach(sub => {
                console.log(`||||||${sub}`);
            });
        });
    });
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);