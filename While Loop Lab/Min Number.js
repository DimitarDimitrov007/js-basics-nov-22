function minNumber(input){
    let index = 0;
    let firstNum = Number(input[index]);
    index++;
    let min = Number.MAX_SAFE_INTEGER;

    while(firstNum !== "Stop"){
        let number = Number(firstNum);
        if(number < min){
            min = number;
        }
        firstNum = input[index];
        index++;
    }
    console.log(min);


}
minNumber(["100","99","80","70","Stop"]);
minNumber(["-10","20","-30","Stop"]);

