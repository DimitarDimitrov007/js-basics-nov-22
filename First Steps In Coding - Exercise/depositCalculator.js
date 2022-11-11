function depositCalculator(input){
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let annualInterestRatePercent = Number(input[2]) / 100;

    let finalSum = deposit + time * ((deposit * annualInterestRatePercent)/12);
    console.log(finalSum);


}
depositCalculator(["200","3","5.7"]);
depositCalculator(["2350","6","7"]);
