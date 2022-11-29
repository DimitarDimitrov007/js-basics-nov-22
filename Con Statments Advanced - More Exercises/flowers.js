function flowers(input){
    let hrizantemiCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let yOrN = input[4];

    let flowerPrice = 0;
    let additionalTax = 2;

    switch(season){
        case "Spring":
        case "Summer" :
            flowerPrice = (hrizantemiCount * 2) + (rosesCount * 4.10) + (tulipsCount * 2.50);
            break;
        case "Autumn" :
        case "Winter" :
            flowerPrice = (hrizantemiCount * 3.75) + (rosesCount * 4.50) + (tulipsCount * 4.15);
            break;

    }

    if(yOrN === "Y"){
        flowerPrice = flowerPrice * 1.15;
        
    }

    if(tulipsCount > 7 && season === "Spring"){
        flowerPrice = flowerPrice * 0.95;

    }else if(rosesCount >= 10 && season === "Winter"){
        flowerPrice = flowerPrice * 0.90;
    }

    if((hrizantemiCount + rosesCount + tulipsCount) > 20 ){
        flowerPrice = flowerPrice * 0.80;
    }

    flowerPrice = flowerPrice + additionalTax;

    console.log(flowerPrice.toFixed(2));
}
flowers(["2","4","8","Spring","Y"]);
flowers(["3","10","9","Winter","N"]);
flowers(["10","10","10","Autumn","N"]);