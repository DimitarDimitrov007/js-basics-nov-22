function areaTriangle(input){
    let a = Number(input[0]);
    let h = Number(input[1]);
    let area = a * h / 2;
    
    console.log(area.toFixed(2));

}
areaTriangle(["20","30"]);
areaTriangle(["15","35"])
areaTriangle(["7.75","8.45"]);
areaTriangle(["1.23456","4.56789"]);