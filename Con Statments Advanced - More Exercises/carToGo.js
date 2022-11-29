function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];

    let type = 0;
    let klas = 0;
    let price = 0;

    if(budget <= 100){
        klas = "Economy class";
        if(season === "Summer"){
            type = "Cabrio";
            price = budget * 0.35;
        }else{
            type = "Jeep";
            price = budget * 0.65;
        }

    }else if(budget <= 500){
        klas = "Compact class";
        if(season === "Summer"){
            type = "Cabrio";
            price = budget * 0.45;
        }else{
            type = "Jeep";
            price = budget * 0.80;
        }


    }else{
        klas = "Luxury class";
        type = "Jeep";
        price = budget * 0.90;
    }

    console.log(klas);
    console.log(`${type} - ${price.toFixed(2)}`);

}
carToGo(["450","Summer"]);
carToGo(["450","Winter"]);
carToGo(["1010","Summer"]);
carToGo(["99.99","Summer"]);
carToGo(["1010","Winter"]);
carToGo(["70.50","Winter"]);


