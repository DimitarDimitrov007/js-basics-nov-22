function trainTheTrainers(input) {
    let index = 0;
    let judgesCount = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;
    let currentMark = input[index];
    index++;
    let marksCount = 0;
    let sumOfMarks = 0;
    let totalSum = 0;
    let presentationCount = 0;
    let averageMark = 0;

    while (presentationName !== "Finish") {
        currentMark = Number(currentMark);
        marksCount++;
        if (marksCount < judgesCount) {
            sumOfMarks += currentMark;
            currentMark = input[index];
            index++;
            continue;

        } else {
            sumOfMarks += currentMark;
            averageMark = (sumOfMarks / marksCount).toFixed(2);
            console.log(`${presentationName} - ${averageMark}.`);

        }
        presentationName = input[index];
        index++;
        currentMark = input[index];
        index++;
        presentationCount++;
        totalSum += Number(averageMark);
        sumOfMarks = 0;
        marksCount = 0;


    }
    console.log(`Student's final assessment is ${(totalSum / presentationCount).toFixed(2)}.`);


}
//trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]);
//trainTheTrainers(["2","Objects and Classes","5.77","4.23","Dictionaries","4.62","5.02","RegEx","2.88","3.42","Finish"]);


