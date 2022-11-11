function basketballEquipment(input){
    let annualTax = Number(input[0]);

    let shoes = annualTax - (annualTax * 0.4);
    let clothes = shoes - (shoes * 0.2 );
    let ball = clothes / 4;
    let accessories = ball / 5;
    let totalSum = annualTax + shoes + clothes + ball + accessories;
    console.log(totalSum);

}
basketballEquipment(["365"]);
basketballEquipment(["550"]);