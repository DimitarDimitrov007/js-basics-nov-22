function catDiet(input){
    let percentFats = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let allCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let gramsInFats = (((percentFats * allCalories) / 100) / 9);
    let gramsInProtein = (((percentProtein * allCalories) / 100) / 4);
    let gramsInCarbs = (((percentCarbs * allCalories) / 100) / 4);

    let totalWeight = gramsInCarbs + gramsInFats + gramsInProtein;
    let caloriesPerGram = allCalories / totalWeight;

    let caloriesWithoutWater = (((100 - percentWater) * caloriesPerGram) / 100);
    console.log(caloriesWithoutWater.toFixed(4));

}
catDiet(["60",
"25",
"15",
"2500",
"60"]);

