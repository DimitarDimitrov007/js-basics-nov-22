function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = 1;
    let excluded = 0;
    let sum = 0;

    while (grade <= 12) {
        let mark = Number(input[index]);
        if (mark < 4.00) {
            excluded += 1;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grade} grade`)
                break;
            }
            continue;
        }
        sum += mark;
        grade++;
        index++;

    }
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`)
    }

}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

