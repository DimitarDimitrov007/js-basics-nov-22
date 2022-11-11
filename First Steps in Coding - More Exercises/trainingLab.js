function trainingLab(input){
    let wInM = Number(input[0]);
    let hInM = Number(input[1]);

    let wInCm = wInM * 100;
    let hInCm = hInM * 100;
    let corridor = 100;

    let spaceWithoutCorridor = hInCm - corridor;
    let spaceH= parseInt(spaceWithoutCorridor / 70);
    let spaceW = parseInt(wInCm / 120);
    let totalPlaces = (spaceH * spaceW) - 3;
    console.log(totalPlaces);
    
}
trainingLab(["15","8.9"]);
trainingLab(["8.4","5.2"]);
