function schoolCamp(input){
    let season = input[0];
    let group = input[1];
    let numberOfStudents = Number(input[2]);
    let nightsCount = Number(input[3]);

    let sport = 0;
    let price = 0;

    switch(season){
        case "Spring" :
            if(group === "girls"){
                sport = "Athletics";
                price = numberOfStudents * nightsCount * 7.20;
            }else if(group === "boys"){
                sport = "Tennis";
                price = numberOfStudents * nightsCount * 7.20;

            }else{
                sport = "Cycling";
                price = numberOfStudents * nightsCount * 9.50;
            }
             break;
        case "Summer" :
            if(group === "girls"){
                sport = "Volleyball";
                price = numberOfStudents * nightsCount * 15;
            }else if(group === "boys"){
                sport = "Football";
                price = numberOfStudents * nightsCount * 15;

            }else{
                sport = "Swimming";
                price = numberOfStudents * nightsCount * 20;
            }
             break;
        case "Winter" :
            if(group === "girls"){
                sport = "Gymnastics";
                price = numberOfStudents * nightsCount * 9.60;
            }else if(group === "boys"){
                sport = "Judo";
                price = numberOfStudents * nightsCount * 9.60;

            }else{
                sport = "Ski";
                price = numberOfStudents * nightsCount * 10;
            }
             break;

    }

    if(numberOfStudents >= 50){
        price = price * 0.50;
    }else if(numberOfStudents >= 20 && numberOfStudents < 50){
        price = price * 0.85;
    }else if(numberOfStudents >= 10 && numberOfStudents < 20){
        price = price * 0.95;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);

}
schoolCamp(["Spring","girls","20","7"]);
schoolCamp(["Winter","mixed","9","15"]);
schoolCamp(["Summer","boys","60","7"]);
schoolCamp(["Spring","mixed","17","14"]);

