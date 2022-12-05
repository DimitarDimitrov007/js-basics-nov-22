function multiTable(input){
    let n = Number(input[0]);

    for( let i = 1; i <= 10; i+=1){
        let result = i * n
        console.log(`${i} * ${n} = ${result}`);
    }
}
multiTable(["5"]);