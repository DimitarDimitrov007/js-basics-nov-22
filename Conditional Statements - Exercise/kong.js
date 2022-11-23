function kong(input){
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothesPrice= Number(input[2]);

    let decor = budget * 0.10;
    let moneyForClothes = statistCount * clothesPrice;
    

    if(statistCount > 150){
        moneyForClothes = moneyForClothes - (moneyForClothes* 0.10);

    }
    let movieSum = decor + moneyForClothes

    if(movieSum > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(movieSum - budget).toFixed(2)} leva more.`);

    }else{
        console.log("Action!" );
        console.log(`Wingard starts filming with ${(budget - movieSum).toFixed(2)} leva left.`);
    }

}
kong(["20000","120","55.5"]);
kong(["15437.62","186","57.99"]);
kong(["9587.88","222","55.68"]);


