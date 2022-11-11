function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningLiquidLitres = Number(input[2]);
    let discountPercent= Number(input[3]) / 100;

    let moneyForPens = pens * 5.8;
    let moneyForMarkers = markers * 7.2;
    let moneyForCleaningLiquid = cleaningLiquidLitres * 1.2;
    let discount = (moneyForPens + moneyForMarkers + moneyForCleaningLiquid) * discountPercent;
    let finalPrice = moneyForPens + moneyForMarkers + moneyForCleaningLiquid - discount;
    console.log(finalPrice);

}
suppliesForSchool(["2","3","4","25"]);
suppliesForSchool(["4","2","5","13"]);
