function pets(input){
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFoodDay = Number(input[2]);
    let catFoodDay = Number(input[3]);
    let tortoiseFoodDay = Number(input[4]);
    tortoiseFoodDay = tortoiseFoodDay / 1000;

    let foodNeeded = (days * dogFoodDay) + (days * catFoodDay) + (days * tortoiseFoodDay);
    let diff = Math.abs(foodKg - foodNeeded);

    if(foodKg >= foodNeeded){
        console.log(`${Math.floor(diff)} kilos of food left.`);

    }else{
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
 
    }
}
pets(["2","10","1","1","1200"]);
pets(["5","10","2.1","0.8","321"]);