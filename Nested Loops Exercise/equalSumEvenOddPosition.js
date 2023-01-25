function equalSumEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let result = "";

    for (let number = firstNum; number <= lastNum; number++) {
         number = String(number);

        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < number.length; i++) {
            let currentDigit = Number(number[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }
        if (evenSum === oddSum) {
            result += number + " ";

        }

    }
    console.log(result);
}
equalSumEvenOddPosition(["100000", "100050"]);
equalSumEvenOddPosition(["123456","124000"]);
equalSumEvenOddPosition(["299900","300000"]);
equalSumEvenOddPosition(["100115","100120"]);


