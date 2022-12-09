function grades(input){
    let numberOfStudents = Number(input[0]);
    let totalGrades = 0;
    let poorCounter = 0;
    let averageCounter = 0;
    let goodCounter = 0;
    let veryWellCounter = 0;

    for( let i= 1; i < input.length;i+=1){
        let grade = Number(input[i]);
        if(grade >= 2.00 && grade <= 2.99){
            totalGrades += grade;
            poorCounter += 1;

        }else if(grade >= 3.00 && grade <= 3.99){
            totalGrades += grade;
            averageCounter += 1;

        }else if(grade >= 4.00 && grade <= 4.99){
            totalGrades += grade;
            goodCounter += 1;

        }else if(grade >= 5.00){
            totalGrades += grade;
            veryWellCounter +=1;
        }

    }

    let averageMark = totalGrades / numberOfStudents;
    console.log(`Top students: ${((veryWellCounter / numberOfStudents) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((goodCounter / numberOfStudents) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((averageCounter / numberOfStudents) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((poorCounter / numberOfStudents) * 100).toFixed(2)}%`);
    console.log(`Average: ${averageMark.toFixed(2)}`);

}
grades([10,3.00,2.99,5.68,3.01,4,4,6.00,4.50,2.44,5]);
grades([6,2,3,4,5,6,2.2]);