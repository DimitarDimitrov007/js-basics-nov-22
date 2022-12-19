function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let currentNumberOfBoxes = input[index];
    index++;
    let homeArea = width * length * height;
    let oneBoxArea = 1 * 1 * 1;

    while (homeArea > 0) {
        if (currentNumberOfBoxes === "Done") {
            console.log(`${homeArea} Cubic meters left.`);
            return;

        }
        currentNumberOfBoxes = Number(currentNumberOfBoxes);
        homeArea -= currentNumberOfBoxes * oneBoxArea;
        currentNumberOfBoxes = input[index];
        index++;

    }
    console.log(`No more free space! You need ${Math.abs(homeArea)} Cubic meters more.`);

}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1","2","4", "6","Done"]);
