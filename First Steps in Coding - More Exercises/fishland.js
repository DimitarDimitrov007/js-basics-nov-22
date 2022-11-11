function fishMarket(input){
    let skumriqKgPrice = Number(input[0]);
    let cacaKgPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudKgPrice = skumriqKgPrice + (skumriqKgPrice * 0.6);
    let safridKgPrice = cacaKgPrice + (cacaKgPrice * 0.8);
    let totalSum = (palamudKg * palamudKgPrice) + (safridKg * safridKgPrice) + (midiKg * 7.5);

     console.log(totalSum.toFixed(2));

}
fishMarket(["6.90","4.20","1.5","2.5","1"]);
fishMarket(["5.55","3.57","4.3","3.6","7"]);
fishMarket(["7.79","5.35","9.3","0","0"]);
