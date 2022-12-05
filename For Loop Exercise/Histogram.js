function histogram(input){
    let n = Number(input[0]);

    let p1Counter = 0; 
    let p2Counter = 0; 
    let p3Counter = 0; 
    let p4Counter = 0; 
    let p5Counter = 0;
      
    for(let index = 1; index < input.length; index +=1){
        let number = input[index];

        if(number < 200){
            p1Counter +=1;
        }else if(number <= 399){
            p2Counter += 1;
        }else if(number <= 599){
            p3Counter +=1;
        }else if(number <= 799){
            p4Counter +=1;
        }else if(number >= 800){
            p5Counter +=1;
        }

    
    }
    let p1 = (p1Counter / n) * 100;
    let p2 = (p2Counter / n) * 100;
    let p3 = (p3Counter / n) * 100;
    let p4 = (p4Counter / n) * 100;
    let p5 = (p5Counter / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);


}
histogram(["3","1","2","999"]);
//histogram(["7","800","801","250","199","399","599","799"]);
//histogram(["9","367", "99", "200", "799","999","333","555","111","9"]);
//histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"]);


