function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3])/100;

    let tankVolumeInCm = length * width * hight;
    let tankVolumeInDm = tankVolumeInCm / 1000;
    let neededLitres = tankVolumeInDm - (tankVolumeInDm * percent);
    console.log(neededLitres);

}
fishTank(["85 ","75","47","17"]);
fishTank(["105","77","89","18.5"]);

