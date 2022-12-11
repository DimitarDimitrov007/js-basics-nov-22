function holyday(input) {
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let positiveNegative = input[2];

    let nights = days - 1;
    let price = 0;

    switch (typeOfRoom) {
        case "room for one person":
            if(days < 10){
                price = nights * 18;

            }else if(days < 15){
                price = nights * 18;

            }else if(days > 15){
                price = nights * 18;

            }
            break;
        case "apartment":
            if(days < 10){
                price = (nights * 25) * 0.7;

            }else if(days < 15){
                price = (nights * 25) * 0.65;

            }else if(days > 15){
                price = (nights * 25) * 0.5;
                
            }
            break;
        case "president apartment":
            if(days < 10){
                price = (nights * 35) * 0.9;

            }else if(days < 15){
                price = (nights * 35) * 0.85;

            }else if(days > 15){
                price = (nights * 35) * 0.8;
                
            }
            break;
    }

    if(positiveNegative === "positive"){
        price = price * 1.25;

    }else{
        price = price * 0.9
    }

    console.log(price.toFixed(2));


}holyday(["14",
"apartment",
"positive"])
