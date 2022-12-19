function walking(input) {
    let stepsGoal = 10000;
    let index = 0;
    let currentSteps = input[index];
    index++;
    let totalSteps = 0;

    while(totalSteps < stepsGoal){
        if(currentSteps === "Going home"){
            currentSteps = Number(input[index]);
            totalSteps += currentSteps;
            break;
            
        }
        currentSteps = Number(currentSteps);
        totalSteps += currentSteps;
        currentSteps = input[index];
        index++;

    }
    
    if(totalSteps >= stepsGoal){
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - stepsGoal} steps over the goal!`);

    }else{
        console.log(`${stepsGoal - totalSteps} more steps to reach goal.`);
    }

}
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125","250","4000","30","2678","4682"]);

