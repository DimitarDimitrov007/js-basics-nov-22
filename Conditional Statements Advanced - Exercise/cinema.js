function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let colones = Number(input[2]);

    let income = 0

    if(type === "Premiere"){
        income = rows * colones *12;

    }else if(type === "Normal"){
        income = rows * colones * 7.5;

    }else{
        income = rows * colones * 5
    }
    console.log(`${income.toFixed(2)} leva`);
   

}
cinema(["Premiere","10","12"]);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);



