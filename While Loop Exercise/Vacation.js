function vacation(input) {
    let index = 0;
    let moneyForVacation = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;
    let currentAction = input[index];
    index++;
    let currentSum = Number(input[index]);
    index++;
    let daysPassed = 0;
    let daysSpending = 0;

    while (daysSpending < 5) {
        daysPassed++;
        if (currentAction === "spend") {
            if(currentSum > moneyAvailable){
                moneyAvailable = 0;
            }else{
                moneyAvailable -= currentSum;
            }
            daysSpending++;
            
        } else {
            daysSpending = 0;
            moneyAvailable += currentSum;
        }
        
        if(moneyAvailable >= moneyForVacation){
            console.log(`You saved the money for ${daysPassed} days.`);
            return;
        }
        currentAction = (input[index]);
        index++;
        currentSum = Number(input[index]);
        index++;

    }
    console.log("You can't save the money.");
    console.log(`${daysPassed}`);

}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);
vacation(["250","150","spend","50","spend","50","save","100","save","100"]);

