function fuelTank(input){
    let typeFuel = input[0];
    let fuelLitres = Number(input[1]);

    if(typeFuel === "Diesel"){
        if(fuelLitres >= 25){
            console.log(`You have enough diesel.`);
        }else{
            console.log(`Fill your tank with diesel!`);
        }

    }else if(typeFuel === "Gasoline"){
        if(fuelLitres >= 25){
            console.log(`You have enough gasoline.`);
        }else{
            console.log(`Fill your tank with gasoline!`);
        }
        
    }else if(typeFuel === "Gas"){
        if(fuelLitres >= 25){
            console.log(`You have enough gas.`);
        }else{
            console.log(`Fill your tank with gas!`);
        }
    }else{
        console.log("Invalid fuel!");
    }

}
fuelTank(["Diesel","10"]);
fuelTank(["Gasoline","40"]);
fuelTank(["Gas","25"]);
fuelTank(["Kerosene","200"]);

