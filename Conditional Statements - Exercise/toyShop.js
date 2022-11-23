function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let money = (puzzleCount * 2.6) + (dollsCount * 3) + (bearsCount * 4.1) + (minionsCount * 8.2) + (trucksCount * 2);
    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(toysCount >= 50){
        money = money - (money * 0.25);
    }

    let rent = money * 0.1;
    money = money - rent;

    if(money >= tripPrice){
        console.log(`Yes! ${(money - tripPrice).toFixed(2)} lv left.`);

    }else{
       console.log(`Not enough money! ${(tripPrice - money).toFixed(2)} lv needed.`);

    }
    
}
toyShop(["40.8","20","25","30","50","10"]);
toyShop(["320","8","2","5","5","1"]);


