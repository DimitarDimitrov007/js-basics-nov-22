function evenOrOdd(input){
    let a = Number(input[0]);

    if(a % 2 === 0){
        console.log("even");

    }else{
        console.log("odd");
    }

}
evenOrOdd(["2"]);
evenOrOdd(["3"]);
evenOrOdd(["25"]);
evenOrOdd(["1024"]);