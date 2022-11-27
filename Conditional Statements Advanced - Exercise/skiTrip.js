function skiTrip(input){
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    let nights = days - 1;
    let price = 0;

    switch(type){
        case "room for one person" :
            price = nights * 18;
            
             break;
        case "apartment" :
             if(days < 10){
                price = nights * 25 * 0.70;
             }else if(days >= 10 && days <= 15){
                price = nights * 25 * 0.65;

             }else{
                price = nights * 25 * 0.50;
             }
        break;
        case "president apartment" :
            if(days < 10){
                price = nights * 35 * 0.90;
             }else if(days >= 10 && days <= 15){
                price = nights * 35 * 0.85;

             }else{
                price = nights * 35 * 0.80;
             } 

        break;
    }

    if(grade === "positive"){
        price = price * 1.25;

    }else{
        price = price * 0.90;
    }

    console.log(price.toFixed(2));

}
skiTrip(["14","apartment","positive"]);
skiTrip(["30","president apartment","negative"]);
skiTrip(["12","room for one person","positive"]);
skiTrip(["2","apartment","positive"]);



