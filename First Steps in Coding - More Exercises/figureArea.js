function figureArea(input){
    let b1 = Number(input[0])
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let figureSquareArea = (b1 + b2) * h /2;

    console.log(figureSquareArea.toFixed(2));

}
figureArea(["8","13","7"]); 