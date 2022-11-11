function yardGreening(input){
    let squareMeters = Number(input[0]);
    let costWithoutDiscount= squareMeters * 7.61;
    let discount = costWithoutDiscount * 0.18;
    let finalCost = costWithoutDiscount - discount;
    
    console.log(`The final price is: ${finalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);

    
}
yardGreening(["550"]);
yardGreening(["150"]);