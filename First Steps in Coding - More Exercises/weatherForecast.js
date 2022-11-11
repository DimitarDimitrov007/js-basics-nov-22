function weatherForecast(input){
    let time = input[0];

    if(time === "sunny"){
        console.log("It's warm outside!");

    }else{
        console.log("It's cold outside!");
    }

}
weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);