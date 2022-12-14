function maxNumber(input){
    let index = 0;
    let firstNum = Number(input[index]);
    index ++;
    let max = Number.MIN_SAFE_INTEGER;

    while(firstNum !== "Stop"){
        let num = Number(firstNum);
        if(num > max){
            max = num;
        }
        firstNum = input[index];
        index ++;

    }
    console.log(max);

}
maxNumber(["100","99","80","70","Stop"]);
maxNumber(["- 10","20","- 30","Stop"]);
maxNumber(["45","- 20","7","99","Stop"]);


