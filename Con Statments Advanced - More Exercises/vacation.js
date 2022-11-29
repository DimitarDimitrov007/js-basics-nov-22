function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = 0;
    let typeOfHousing = 0;

    if(budget <= 1000){
        typeOfHousing = "Camp";
        if(season === "Summer"){
            location = "Alaska";
            price = budget * 0.65;

        }else{
            location = "Morocco";
            price = budget * 0.45;
        }

    }else if(budget <= 3000){
        typeOfHousing = "Hut";
        if(season === "Summer"){
            location = "Alaska";
            price = budget * 0.80;

        }else{
            location = "Morocco";
            price = budget * 0.60;
        }

    }else{
        typeOfHousing = "Hotel";
        if(season === "Summer"){
            location = "Alaska";
            price = budget * 0.90;

        }else{
            location = "Morocco";
            price = budget * 0.90;
        }

    }

    console.log(`${location} - ${typeOfHousing} - ${price.toFixed(2)}`);


}
vacation(["800","Summer"]);
vacation(["799.50","Winter"]);
vacation(["3460","Summer"]);
vacation(["1100","Summer"]);
vacation(["5000","Winter"]);
vacation(["2543.99","Winter"]);
