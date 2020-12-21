function roadRadar(input) {

    input = String(input);
    const inputInfo = input.split(',');
    speed = Number(inputInfo[0]);
    area = inputInfo[1];

    function getSpeedingMessage(speed, limit) {
        let speeding = speed - limit;
        let speedingMessage = '';
        if (speeding <= 20 && speeding > 0) {
            speedingMessage = 'speeding';
        }
        else if (speeding > 20 && speeding <= 40) {
            speedingMessage = 'excessive speeding';
        }
        else if (speeding > 40) {
            speedingMessage = 'reckless driving';
        }
        return speedingMessage;
    }

    let limit = 0;
    let result = '';
    switch (area) {
        case 'residential': limit = 20;
            result = getSpeedingMessage(speed, limit);
            break;
        case 'city': limit = 50;
            result = getSpeedingMessage(speed, limit);
            break;
        case 'interstate': limit = 90;
            result = getSpeedingMessage(speed, limit);
            break;
        case 'motorway': limit = 130;
            result = getSpeedingMessage(speed, limit);
            break;
    }

    console.log(result);
}

// roadRadar([40, 'city']);