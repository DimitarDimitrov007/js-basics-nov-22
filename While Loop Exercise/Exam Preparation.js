function examPreparation(input){
    let index= 0;
    let maxBadGrades = Number(input[index]);
    index++;
    let taskName = input[index];
    index++;
    let taskMark = Number(input[index]);
    index++
    let badGradeCounter = 0;
    let sumOfMarks = 0;
    let numberOfTasks = 0;
    let lastTaskName = "";

    while(taskName !== "Enough"){
        lastTaskName = taskName;
        if(taskMark <= 4){
            badGradeCounter++;
            if(maxBadGrades === badGradeCounter){
                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                return;
            }
        }
        sumOfMarks += taskMark;
        numberOfTasks ++;
        taskName = input[index];
        index++;
        taskMark = Number(input[index]);
        index++;

    }
    console.log(`Average score: ${(sumOfMarks / numberOfTasks).toFixed(2)}`);
    console.log(`Number of problems: ${numberOfTasks}`);
    console.log(`Last problem: ${lastTaskName}`);

}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);

