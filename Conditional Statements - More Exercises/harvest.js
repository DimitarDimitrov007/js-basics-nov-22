function harvest(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let totalKgGrapes = (x * y) * 0.4;
    let litresWine = totalKgGrapes / 2.5;
    let diff = Math.abs(litresWine - z);

    if(litresWine < z){
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
        
    }else{
        console.log(`Good harvest this year! Total wine: ${litresWine} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / workers)} liters per person.`);
    }

}
harvest(["650","2","175","3"]);
harvest(["1020","1.5","425","4"]);
