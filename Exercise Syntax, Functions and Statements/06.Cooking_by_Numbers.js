function cookByNumber(input) {
    const numberAndCommands = String(input).split(",");
    let cookedNumber = Number(numberAndCommands[0]);
    for (let i = 1; i < numberAndCommands.length; i++) {
        const currentCommand = numberAndCommands[i];
        switch (currentCommand) {
            case 'chop': cookedNumber /= 2; break;
            case 'dice': cookedNumber = Math.sqrt(cookedNumber); break;
            case 'spice': cookedNumber++; break;
            case 'bake': cookedNumber *= 3; break;
            case 'fillet': cookedNumber -= 0.2 * cookedNumber; break;
        }
        console.log(cookedNumber);
    }
}
// cookByNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
