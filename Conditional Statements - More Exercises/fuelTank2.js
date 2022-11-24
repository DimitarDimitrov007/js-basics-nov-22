function fuelTank2(input){
    let fuelType = input[0];
    let fuelLitres = Number(input[1]);
    let cardYesOrNo = input[2];

    let price = 0;

    if(fuelType === "Gas" && cardYesOrNo === "Yes"){
        if(fuelLitres >= 20 && fuelLitres <= 25){
            price = (0.85 * fuelLitres) - (0.85 * fuelLitres * 0.08);
        }else if(fuelLitres > 25){
            price = (0.85 * fuelLitres) - (0.85 * fuelLitres * 0.1);
        }else{
            price = 0.85 * fuelLitres;
        }

    }else if(fuelType === "Gas" && cardYesOrNo === "No"){
        if(fuelLitres >= 20 && fuelLitres <= 25){
            price = (0.93 * fuelLitres) - (0.93 * fuelLitres * 0.08);
        }else if(fuelLitres > 25){
            price = (0.93 * fuelLitres) - (0.93 * fuelLitres * 0.1);
        }else{
            price = 0.93 * fuelLitres;
        }
    }


    if(fuelType === "Gasoline" && cardYesOrNo === "Yes"){
        if(fuelLitres >= 20 && fuelLitres <= 25){
            price = (2.04 * fuelLitres) - (2.04 * fuelLitres * 0.08);
        }else if(fuelLitres > 25){
            price = (2.04 * fuelLitres) - (2.04 * fuelLitres * 0.1);
        }else{
            price = 2.04 * fuelLitres;
        }

    }else if(fuelType === "Gasoline" && cardYesOrNo === "No"){
        if(fuelLitres >= 20 && fuelLitres <= 25){
            price = (2.22 * fuelLitres) - (2.22 * fuelLitres * 0.08);
        }else if(fuelLitres > 25){
            price = (2.22 * fuelLitres) - (2.22 * fuelLitres * 0.1);
        }else{
            price = 2.22 * fuelLitres;
        }
    }

    if(fuelType === "Diesel" && cardYesOrNo === "Yes"){
        if(fuelLitres >= 20 && fuelLitres <= 25){
            price = (2.21 * fuelLitres) - (2.21 * fuelLitres * 0.08);
        }else if(fuelLitres > 25){
            price = (2.21 * fuelLitres) - (2.21 * fuelLitres * 0.1);
        }else{
            price = 2.21 * fuelLitres;
        }

    }else if(fuelType === "Diesel" && cardYesOrNo === "No"){
        if(fuelLitres >= 20 && fuelLitres <= 25){
            price = (2.33 * fuelLitres) - (2.33 * fuelLitres * 0.08);
        }else if(fuelLitres > 25){
            price = (2.33 * fuelLitres) - (2.33 * fuelLitres * 0.1);
        }else{
            price = 2.33 * fuelLitres;
        }
    }

console.log(`${price.toFixed(2)} lv.`);
    
}
fuelTank2(["Gas","30","Yes"]);
fuelTank2(["Gasoline","25","No"]);
fuelTank2(["Diesel","19","No"]);