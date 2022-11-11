function vegetableMarket(input){
    let vegKgPrice = Number(input[0]);
    let fruitKgPrice = Number(input[1]);
    let vegKg = Number(input[2]);
    let fruitKg = Number(input[3]);
    let totalSumInBgn = (vegKg * vegKgPrice) + (fruitKg * fruitKgPrice);
    let totalSumInEu = totalSumInBgn / 1.94;

    console.log(totalSumInEu.toFixed(2));

}
vegetableMarket(["0.194","19.4","10","10"]);
vegetableMarket(["1.5","2.5","10","10"]);