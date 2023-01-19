function sumOfTwoNumbers(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isMagic = false;

    for (let i = firstNumber; i <= lastNumber; i++) {
        for (let j = firstNumber; j <= lastNumber; j++) {
            counter++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isMagic = true;
                break;

            }
        }
        if (isMagic) {
            break;
        }
    }
    if (isMagic === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);



