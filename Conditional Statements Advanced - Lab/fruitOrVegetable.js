function fruitOrVegetable(input){
    let name = input[0];

    switch(name){
        case "banana":
        case "apple" :
        case "kiwi": 
        case "cherry" : 
        case  "lemon" :
        case "grapes" : console.log("fruit");break;
        case "tomato" :
        case "cucumber" :
        case "pepper" :
        case "carrot" :console.log("vegetable");break;
        default : console.log("unknown");  break;          

    }

}
fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);