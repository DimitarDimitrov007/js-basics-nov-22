function logistics(input) {
    let moneyNeeded = 0;
    let shipmentCount = Number(input[0]);
    let totalWeight = 0;
    let tonsByBus = 0;
    let tonsByTruck = 0;
    let tonsByTrain = 0;

    for (let i = 1; i < input.length; i += 1) {
        let weight = Number(input[i]);
        if (weight >= 1 && weight <= 3) {
            moneyNeeded += weight * 200;
            totalWeight += weight;
            tonsByBus += weight;
        } else if (weight >= 4 && weight <= 11) {
            moneyNeeded += weight * 175;
            totalWeight += weight;
            tonsByTruck += weight;
        } else if (weight >= 12) {
            moneyNeeded += weight * 120;
            totalWeight += weight;
            tonsByTrain += weight;
        }

    }

    let averagePricePerTon = moneyNeeded / totalWeight;

    console.log(averagePricePerTon.toFixed(2));
    console.log(`${((tonsByBus / totalWeight) * 100).toFixed(2)}%`);
    console.log(`${((tonsByTruck / totalWeight) * 100).toFixed(2)}%`);
    console.log(`${((tonsByTrain / totalWeight) * 100).toFixed(2)}%`);


}
logistics([4, 1, 5, 16, 3]);
logistics([5, 2, 10, 20, 1, 7]);