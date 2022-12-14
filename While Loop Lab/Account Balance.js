function accountBalance(input){
    let index = 0;
    let deposit = Number(input[index]);
    index++;
    let balance = 0;

    while(deposit !== "NoMoreMoney" ){
        let amount = Number(deposit);
        if(amount < 0){
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[index];
        index++;

    }
    console.log(`Total: ${balance.toFixed(2)}`);


}
accountBalance(["5.51", "69.42","100","NoMoreMoney"]);
