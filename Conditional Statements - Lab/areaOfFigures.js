function areaOfFigures(input) {
    let figureType = input[0];
    let area = 0;
    let a = Number(input[1]);

    if (figureType === "square") {
        area = a * a;

    } else if (figureType === "rectangle") {
        let b = Number(input[2]);
        area = a * b;

    } else if (figureType === "circle") {
        area = Math.PI * Math.pow(a, 2);

    } else {
        let h = Number(input[2]);
        area = a * h / 2;

    }
    console.log(area.toFixed(3));

}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);



