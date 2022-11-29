function bikeRace(input){
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let typeOfField = input[2];

    let charitySum = 0;

    switch(typeOfField){
        case "trail" : charitySum = ((juniors * 5.5) + (seniors * 7)) ; 
           break;
        case "cross-country" :
            if(seniors + juniors >= 50){
                charitySum = ((juniors * 8) + (seniors * 9.5)) * 0.75;
            }else{
                charitySum = ((juniors * 8) + (seniors * 9.5));
            }
           break;
        case "downhill" : charitySum = (juniors * 12.25) + ( seniors * 13.75);
           break;
        case "road" : charitySum = (juniors * 20) + (seniors * 21.50);
           break;   
    }

    charitySum = charitySum * 0.95;

    console.log(charitySum.toFixed(2));

}
bikeRace(["10","20","trail"]);
bikeRace(["21","26","cross-country"]);
bikeRace(["30","25","cross-country"]);
bikeRace(["10","10","downhill"]);
bikeRace(["3","40","road"]);
