function specialNumbers(input){
    let num = Number(input[0]);
    let result = "";

    for(let i = 1111; i <= 9999; i++){
         i = String(i);
        let isSpecial = true;

        for(let j = 0; j < i.length; j++){
            let currentDigit = Number(i[j]);
            if(num % currentDigit !==0){
                isSpecial = false;
                break;

            }
        }
        if(isSpecial === true){
            result += i + " ";

        }
    }
    console.log(result)
}
specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);