function shopping(input){
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsCost = videoCards * 250;
    let processorsCost = processors * (videoCardsCost * 0.35);
    let ramCost = ram * ( videoCardsCost * 0.10);
    let totalSum = processorsCost + ramCost + videoCardsCost;

    if(videoCards > processors){
        totalSum = totalSum - (totalSum * 0.15);

    }

    if(budget >= totalSum){
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);

    }else{
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }

}
shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);

