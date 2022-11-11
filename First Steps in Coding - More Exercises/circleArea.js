function circleArea(input){
    let r = Number(input[0]);
    let parameter = 2 * Math.PI * r;
    let area = Math.PI * r * r;

    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));

}
circleArea(["3"]);
circleArea(["4.5"]);