function vacationBookList(input){
    let numberPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberDays = Number(input[2]);

    let timeNeeded = numberPages / pagesPerHour;
    let hoursPerDay = timeNeeded / numberDays;
    console.log(hoursPerDay);


}
vacationBookList(["212","20","2"]);
vacationBookList(["432","15","4"]);


