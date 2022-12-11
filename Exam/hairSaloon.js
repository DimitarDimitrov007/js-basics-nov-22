function hair(input){
    let index = 0;
    let moneyGoal = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let typeOfService = input[index];
    index++;
    let totalSum = 0;

    while(command !== "closed"){
        if(command === "haircut"){
            if(typeOfService === "mens"){
                totalSum += 15;

            }else if(typeOfService === "ladies"){
                totalSum += 20;

            }else if(typeOfService === "kids"){
                totalSum += 10;

            }

        }else if(command === "color"){
            if(typeOfService === "touch up"){
                totalSum += 20;

            }else if(typeOfService === "full color"){
                totalSum += 30;

            }
        }

        if(totalSum >= moneyGoal){
            console.log("You have reached your target for the day!");
            console.log(`Earned money: ${totalSum}lv.`);
            return;
        }

        command = input[index];
        index++;
        typeOfService = input[index];
        index++;

    }
    console.log(`Target not reached! You need ${moneyGoal - totalSum}lv. more.`);
    console.log(`Earned money: ${totalSum}lv.`);
    
    





}
hair
(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])
