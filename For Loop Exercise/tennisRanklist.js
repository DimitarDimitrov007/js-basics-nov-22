function tennisRankList(input){
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wins = 0;
    let points = startingPoints;

    for(let index = 2; index < input.length; index +=1){
         let stage = input[index];

        switch(stage){
            case "W": points += 2000;
            wins +=1;
            break;

            case "F": points += 1200;
            break;

            case "SF": points += 720;
            break;

        }
        
    }
    let avgPoints = (points - startingPoints) / tournaments;
    let percent = (wins / tournaments ) * 100

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${percent.toFixed(2)}%`);
    
}
tennisRankList(["5","1400","F","SF","W","W","SF"]);
tennisRankList(["4","750","SF","W","SF","W"]);

