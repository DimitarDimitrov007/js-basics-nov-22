function multiplyBy2(input){

    for(let  i = 0; i< input.length; i+=1){
        let number = input[i];
        if(number >= 0){
            console.log(`Result: ${(number * 2).toFixed(2)}`);
        }else{
            console.log("Negative number!");
        }
    }


}
multiplyBy2([12,43.2144,12.3,543.23,-20]);
multiplyBy2([23.43,12.3245,0,65.23432,23,65,-12]);
multiplyBy2([-123]);
