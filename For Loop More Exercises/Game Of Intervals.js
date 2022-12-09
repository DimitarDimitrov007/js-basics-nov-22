function gameOfIntervals(input){
    let turns = Number(input[0]);
    let score = 0;
    let f09Counter = 0;
    let f1019Counter = 0;
    let f2029Counter = 0;
    let f3039Counter = 0;
    let f4050Counter = 0;
    let invalidCounter = 0;
    

    for(let i = 1; i < input.length;i+=1){
        let number = Number(input[i]);
        if(number <0 || number > 50){
            score = score / 2;
            invalidCounter += 1;
            
        }else if(number >= 0 && number <= 9){
            score += number * 0.2;
            f09Counter += 1;
            

        }else if(number >= 10 && number <=19){
            score += number * 0.3;
            f1019Counter += 1;
            

        }else if(number >= 20 && number <= 29){
            score += number * 0.4;
            f2029Counter += 1;
            

        }else if(number >= 30 && number <= 39){
            score += 50;
            f3039Counter += 1;
            
        }else if(number >= 40 && number <= 50){
            score += 100;
            f4050Counter += 1;
            
        }
    }

    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${((f09Counter / turns) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((f1019Counter / turns) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((f2029Counter / turns) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((f3039Counter / turns) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((f4050Counter / turns) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidCounter / turns) * 100).toFixed(2)}%`);

}
gameOfIntervals([10,43,57,-12,23,12,0,50,40,30,20]);