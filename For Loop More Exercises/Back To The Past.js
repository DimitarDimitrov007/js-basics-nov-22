function backToThePast(input){
    let inheritedMoney = Number(input[0]);
    let finalYear = Number(input[1]);

    let age = 18;
    let moneyForCurrentYear = 0;

    for(let i = 1800; i <= finalYear; i+=1){
        let currentYear = i;
        
        if(currentYear % 2 ===0){
            moneyForCurrentYear += 12000;
            age += 1;

        }else{
            moneyForCurrentYear += 12000 + 50 * age;
            age += 1
        }
    }

    let diff = Math.abs(inheritedMoney - moneyForCurrentYear);

    if(moneyForCurrentYear <= inheritedMoney){
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);

    }else{
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }

}
backToThePast([50000,1802]);
backToThePast([100000.15,1808]);