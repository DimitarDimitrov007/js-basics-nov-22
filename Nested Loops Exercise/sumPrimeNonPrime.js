function sumPrimeNonPrime(input) {
    let index = 0;
    let currentNumber = input[index];
    index++;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (currentNumber !== "stop") {
        currentNumber = Number(currentNumber);
        let isPrime = true;

        if (currentNumber < 0) {
            console.log(`Number is negative.`);
            currentNumber = input[index];
            index++;
            continue;
        }
        for (let divisor = 2; divisor < currentNumber; divisor++) {
            if (currentNumber % divisor === 0) {
                isPrime = false;
                break;

            }
        }

        if (isPrime === true) {
            primeSum += currentNumber;
        } else {
            nonPrimeSum += currentNumber;
        }

        currentNumber = input[index];
        index++;


    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30","83","33","-1","20","stop"]);
sumPrimeNonPrime(["0","-9","0","stop"]);


