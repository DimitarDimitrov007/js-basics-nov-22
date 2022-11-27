function summerOutfit(input){
    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if(partOfDay === "Morning"){
        if(degrees >= 10 && degrees <=18){
            outfit = "Sweatshirt";
            shoes = "Sneakers";

        }else if(degrees >= 25){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }else{
            outfit = "Shirt";
            shoes = "Moccasins";
        }

    }else if(partOfDay === "Afternoon"){
        if(degrees >= 10 && degrees <=18){
            outfit = "Shirt";
            shoes = "Moccasins";

        }else if(degrees >= 25){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }else{
            outfit = "T-Shirt";
            shoes = "Sandals";
        }

    }else{
        if(degrees >= 10 && degrees <=18){
            outfit = "Shirt";
            shoes = "Moccasins";

        }else if(degrees >= 25){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else{
            outfit = "Shirt";
            shoes = "Moccasins";
        }

    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16","Morning"]);
summerOutfit(["22","Afternoon"]);
summerOutfit(["28","Evening"]);


