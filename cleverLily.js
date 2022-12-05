function cleverLily(input){
    let lilyAge = Number(input[0]);
    let machinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);


    let stolenMoney = 0;
    let addMoney = 10;
    let toyCounter = 0;
    let savedMoney = 0;

    for(let currentAge = 1; currentAge <= lilyAge; currentAge+=1){
        if(currentAge % 2 === 0){
            stolenMoney +=1;
            savedMoney += addMoney;
            addMoney +=10;

        }else{
            toyCounter+=1;

        }

    }
    let moneyFromToys = toyCounter * singleToyPrice;
    let totalMoney = savedMoney + moneyFromToys - stolenMoney;

    let diff = Math.abs(totalMoney - machinePrice);

    if(totalMoney >= machinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`);

    }else{
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["10","170.00","6"]);
cleverLily(["21","1570.98","3"]);


