function change(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let numOne = "";
    let numTwo = "";
    let counter = 0;

    for (let x = K; x <= 8; x++) {
        for (let y = 9; y >= L; y--) {
            for (let x1 = M; x1 <= 8; x1++) {
                for (let y1 = 9; y1 >= N; y1--) {
                    let result = x + "" + y;
                    let result1 = x1 + "" + y1;
                     
                    if(x % 2 === 0 && x1 % 2 === 0 && y % 2 !== 0 && y1 % 2 !== 0){
                        if(result !== result1){
                            console.log(`${x}${y} - ${x1}${y1}`);
                            counter++;
                        }else{
                            console.log("Cannot change the same player.");
                        }
                    }
                    if(counter >= 6){
                        return;
                    }


                }
            }

        }
    }

}
change(["7",
"6",
"8",
"5"])
