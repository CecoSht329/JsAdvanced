function calculateTime(steps, stepLength, speed) {
    let length = (steps * stepLength);

    let totalRestTimeInMinutes = Math.floor(length / 500);

    let totalTime = length / speed / 1000 * 60;

    let totalTimeInSeconds = Math.ceil((totalRestTimeInMinutes + totalTime) * 60);
    
    let result = new Date(null, null, null, null, null, totalTimeInSeconds);

    console.log(result.toTimeString().split(' ')[0]);
}

// calculateTime(4000, 0.60, 5);