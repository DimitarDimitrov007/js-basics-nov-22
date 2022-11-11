function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let house = 2 * ((x * y) - 1.5 * 1.5) + ((x * x) - 2 * 1.2) + (x * x);
    let greenPaintNeeded = house / 3.4;

    let roof = (x * y) + (x * y) + ((x * h )/2) + ((x * h) /2);
    let redPaintNeeded = roof / 4.3;

    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));

}
housePainting(["6","10","5.2"]);
housePainting(["10.25","15.45","8.88"]);
