function travel(input){
    let index = 0;
    let destination = input[index];
    index++;
    let moneyNeeded = input[index];
    index++;
    let sum = 0;
    let isEnd= false;

    while(destination !== "End"){
        while(moneyNeeded > sum){
            let savedMoney = input[index];
            if(savedMoney !== "End"){
                savedMoney = Number(savedMoney);

            }else{
                isEnd = true;
                break;
            }
            index++;
            sum += savedMoney;
            

        } if(isEnd){
            break;
        }
        console.log(`Going to ${destination}!`);

        destination = input[index];
        index++;
        moneyNeeded = Number(input[index]);
        index++;
        sum = 0;
    } 
    
}
travel(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);
travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",	
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);
