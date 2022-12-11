function moonshine(input){
    let days = Number(input[0]);
    let total = 0;
    let totalLitres = 0;

    for(let i = 1; i < input.length; i+=2 ){
        let litres = Number(input[i]);
        totalLitres += litres;
        let degrees = Number(input[i + 1]);
        let result = litres * degrees;
        total += result;
     
       }
       let totalDegree = total / totalLitres
       console.log(`Liter: ${totalLitres.toFixed(2)}`);
       console.log(`Degrees: ${(totalDegree.toFixed(2))}`);
       if(totalDegree > 42){
        console.log("Dilution with distilled water!");
       }else if(totalDegree < 38){
        console.log("Not good, you should baking!");
       }else if(totalDegree >= 38 && totalDegree <= 42){
        console.log("Super!");
       }
       
    }
    moonshine(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
    