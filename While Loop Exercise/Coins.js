function coins(input){
    let sumToBeReturned = Number(input[0]);
    let sumInStotinki = Math.floor(sumToBeReturned * 100);
    let totalCoins = 0;

    while(sumInStotinki> 0){
        if(sumInStotinki >= 200){
            sumInStotinki -= 200;

        }else if(sumInStotinki >= 100){
            sumInStotinki -= 100;

        }else if(sumInStotinki >= 50){
            sumInStotinki -= 50;

        }else if(sumInStotinki >= 20){
            sumInStotinki -= 20;

        }else if(sumInStotinki >= 10){
            sumInStotinki -= 10;

        }else if(sumInStotinki >= 5){
            sumInStotinki -= 5;

        }else if(sumInStotinki >= 2){
            sumInStotinki -= 2;

        }else if(sumInStotinki >= 1){
            sumInStotinki -= 1;

        }
        totalCoins ++;

    }
    console.log(totalCoins);

}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);