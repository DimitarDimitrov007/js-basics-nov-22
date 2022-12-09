function bills(input){
    let months = Number(input[0]);
    let waterBill = 20;
    let internetBill = 15;
    let totalElectricityBill= 0;
    let totalAnotherBills = 0;
    let totalSum = 0;

    for(let i = 1;i < input.length;i += 1){
         let electricityBill = Number(input[i]);
        totalElectricityBill += electricityBill;
         let anotherBills = (electricityBill + waterBill + internetBill) * 1.2;
         totalAnotherBills += anotherBills;
        totalSum += (waterBill + internetBill + anotherBills + electricityBill);

    }
    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`);
    console.log(`Water: ${(waterBill * months).toFixed(2)} lv`);
    console.log(`Internet: ${(internetBill * months).toFixed(2)} lv`);
    console.log(`Other: ${totalAnotherBills.toFixed(2)} lv`);
    console.log(`Average: ${(totalSum / months).toFixed(2)} lv`);


}
bills([5,68.63,89.25,132.53,93.53,63.22]);
bills([8,123.54,231.54,140.23,100,122.4,430,178.52,64.2]);