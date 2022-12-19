function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let piecesTaken = input[index];
    index++;
    let pieceArea = 1 * 1;
    let cakeArea = width * length;
    let totalPieces = cakeArea / pieceArea;

    while(totalPieces > 0){
        if(piecesTaken === "STOP"){
            console.log(`${totalPieces} pieces are left.`);
            return;

        }
        totalPieces -= piecesTaken;
        piecesTaken = input[index];
        index++;

    }
    console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);

}
cake(["10","10","20","20","20","20","21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);

