function lunchBreak(input){
    let filmName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let leisureTime = breakDuration / 4;
    let timeLeft = breakDuration - (lunchTime + leisureTime);

    if(timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);

    }else{
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`);
    }

}
lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);

