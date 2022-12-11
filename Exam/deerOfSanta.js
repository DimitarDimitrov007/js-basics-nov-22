function enoughFood(input){
    let daysGone = Number(input[0]);
    let totalFood = Number(input[1]);
    let foodForDeer1PerDay = Number(input[2]);
    let foodForDeer2PerDay = Number(input[3]);
    let foodForDeer3PerDay = Number(input[4]);

    let foodNeeded = (daysGone * foodForDeer1PerDay) + (daysGone * foodForDeer2PerDay) + (daysGone * foodForDeer3PerDay);
    if(totalFood >= foodNeeded){
        console.log(`${Math.floor(totalFood - foodNeeded)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(foodNeeded - totalFood)} more kilos of food are needed.`);
    }



}
enoughFood(["2",
"10",
"1",
"1",
"2"]);
