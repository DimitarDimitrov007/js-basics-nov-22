function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let transportMoney = 0;
    let ticketMoney = 0;

    if(category === "Normal"){
        if(peopleCount <= 4){
            transportMoney = budget * 0.75;
            ticketMoney = peopleCount * 249.99;

        }else if(peopleCount <= 9){
            transportMoney = budget * 0.60;
            ticketMoney = peopleCount * 249.99;

        }else if(peopleCount <= 24){
            transportMoney = budget * 0.50;
            ticketMoney = peopleCount * 249.99;

        }else if(peopleCount <= 49){
            transportMoney = budget * 0.40;
            ticketMoney = peopleCount * 249.99; 

        }else{
            transportMoney = budget * 0.25;
            ticketMoney = peopleCount * 249.99;
        }
    
    }else if(category === "VIP"){
        if(peopleCount <= 4){
            transportMoney = budget * 0.75;
            ticketMoney = peopleCount * 499.99;

        }else if(peopleCount <= 9){
            transportMoney = budget * 0.60;
            ticketMoney = peopleCount * 499.99;

        }else if(peopleCount <= 24){
            transportMoney = budget * 0.50;
            ticketMoney = peopleCount * 499.99;

        }else if(peopleCount <= 49){
            transportMoney = budget * 0.40;
            ticketMoney = peopleCount * 499.99; 

        }else{
            transportMoney = budget * 0.25;
            ticketMoney = peopleCount * 499.99;
        }

    }

    let diff = Math.abs(budget - (transportMoney + ticketMoney));

    if(budget >= ticketMoney + transportMoney){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
matchTickets(["1000","Normal","1"]);
matchTickets(["30000","VIP","49"]);