function truckDriver(input){
    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let salaryForMonth = 0;

    switch(season){
        case "Spring" : 
        case "Autumn" :
            if(kmPerMonth <= 5000){
                salaryForMonth = kmPerMonth * 0.75;
            }else if(kmPerMonth <= 10000){
                salaryForMonth = kmPerMonth * 0.95;
            }else if(kmPerMonth <= 20000){
                salaryForMonth = kmPerMonth * 1.45;
            }
             break;
        case "Summer" :
            if(kmPerMonth <= 5000){
                salaryForMonth = kmPerMonth * 0.90;
            }else if(kmPerMonth <= 10000){
                salaryForMonth = kmPerMonth * 1.10;
            }else if(kmPerMonth <= 20000){
                salaryForMonth = kmPerMonth * 1.45;
            }
             break;
        case "Winter" :
            if(kmPerMonth <= 5000){
                salaryForMonth = kmPerMonth * 1.05;
            }else if(kmPerMonth <= 10000){
                salaryForMonth = kmPerMonth * 1.25;
            }else if(kmPerMonth <= 20000){
                salaryForMonth = kmPerMonth * 1.45;
            }
             break;

    }

   let totalSalary = salaryForMonth * 4 * 0.90;

    console.log(totalSalary.toFixed(2));
}
truckDriver(["Summer","3455"]);
truckDriver(["Winter","4350"]);
truckDriver(["Spring","1600"]);
truckDriver(["Winter","5678"]);
truckDriver(["Autumn","8600"]);
truckDriver(["Winter","16042"]);
truckDriver(["Spring","16942"]);
