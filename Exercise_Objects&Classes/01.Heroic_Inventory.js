function solve(input) {
    let heroes = [];

    input.forEach(line => {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        let hero = {
            name,
            level,
            items,
        };
        heroes.push(hero);
    });
    console.log(JSON.stringify(heroes));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

// function solve(input) {

//     class Hero {
//         constructor(name, level, items) {
//             this.name = name;
//             this.level = level;
//             this.items = items ? items.split(', ') : [];
//         }
//     }

//     let heroesInfo = input
//         .map(x => x.split(','));

//     let heroes = [];
//     for (let hero = 0; hero < heroesInfo.length; hero++) {
//         const currentHeroInfo = String(heroesInfo[hero]).split(' / ');

//         const currentHeroName = currentHeroInfo[0];
//         const currentHeroLevel = Number(currentHeroInfo[1]);
//         const currentHeroItems = currentHeroInfo[2];

//         let currentHero = new Hero(currentHeroName, currentHeroLevel, currentHeroItems);
//         heroes.push(currentHero);
//     }
//     console.log(JSON.stringify(heroes));
// }
