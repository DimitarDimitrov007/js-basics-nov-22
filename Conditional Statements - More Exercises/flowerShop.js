function flowerShop(input){
    let magnolii = Number(input[0]);
    let zumbuli = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);

    let profit = (magnolii * 3.25) + (zumbuli * 4) + (roses * 3.5) + (cactuses * 8);
    let profitAfterTax = profit - (profit * 0.05);
    let diff = Math.abs(profitAfterTax - giftPrice);

    if(profitAfterTax >= giftPrice){
        console.log(`She is left with ${Math.floor(diff)} leva.` );

    }else{
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }

}
flowerShop(["2","3","5","1","50"]);
flowerShop(["15","7","5","10","100"]);
