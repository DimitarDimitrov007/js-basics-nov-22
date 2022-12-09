function footballLeague(input){
    let capacity = Number(input[0]);
    let numberOfFans = Number(input[1]);
    let sectorACounter = 0;
    let sectorBCounter = 0;
    let sectorVCounter = 0;
    let sectorGCounter = 0;

    for(let i = 2; i < input.length; i+=1){
        let sector = String(input[i]);

        switch(sector){
            case "A":
                sectorACounter += 1;break;
            case "B":
                sectorBCounter += 1;break;
            case "V":
                sectorVCounter += 1;break;
            case "G": 
                sectorGCounter += 1;break;        
        }
    }

    
    console.log(`${((sectorACounter / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorBCounter / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorVCounter / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorGCounter / numberOfFans) * 100).toFixed(2)}%`);
    console.log(`${((numberOfFans / capacity) * 100).toFixed(2)}%`);

}
footballLeague([76,10,"A","V","V","V","G","B","A","V","B","B"]);
footballLeague([93,16,"A","V","G","G","B","B","G","B","A","B","B","B","A","B","B","A"]);
footballLeague([1000,12,"A","A","V","V","A","G","A","A","V","G","V","A"]);