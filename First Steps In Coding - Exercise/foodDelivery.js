function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let totalMenuCost = (chickenMenu * 10.35) + (fishMenu * 12.4) + (vegMenu * 8.15);
    let dessertCost = totalMenuCost * 0.2;
    let deliveryCost = 2.5;
    let totalSum = totalMenuCost + deliveryCost + dessertCost;
    console.log(totalSum);


}
foodDelivery(["2","4","3"]);
foodDelivery(["9","2","6"]);