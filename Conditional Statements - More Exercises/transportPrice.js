function transportPrice(input){
    let n = Number(input[0]);
    let dayOrNight = input[1];
    let price = 0;

    let taxiRate = 0;

    if(dayOrNight === "day"){
        taxiRate = 0.79

    }else{
        taxiRate = 0.90
    }

    if(n < 20){
        price = 0.70 + (n * taxiRate);
        
    }else if(n < 100){
        price = n * 0.09;

    }else{
        price = n * 0.06;
    }
    console.log(price.toFixed(2));

}
transportPrice(["5","day"]);
transportPrice(["7","night"]);
transportPrice(["25","day"]);
transportPrice(["180","night"]);

