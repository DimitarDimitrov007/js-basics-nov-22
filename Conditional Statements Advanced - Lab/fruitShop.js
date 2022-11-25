function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch(fruit){
        case "banana" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 2.50 * quantity;break;
                case "Saturday":
                case "Sunday": price = 2.70 * quantity;break;
                default : console.log("error");break;
                            
            }
            break;
        case "apple" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 1.20 * quantity;break;
                case "Saturday":
                case "Sunday": price = 1.25 * quantity;break;
                default : console.log("error");break;                     
            }
            break;
        case "orange" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 0.85 * quantity;break;
                case "Saturday":
                case "Sunday": price = 0.90 * quantity;break;
                default : console.log("error");break;           
            }
            break;    
        case "grapefruit" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 1.45 * quantity;break;
                case "Saturday":
                case "Sunday": price = 1.60 * quantity;break;
                default : console.log("error");break;           
            }
            break;  
        case "kiwi" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 2.70* quantity;break;
                case "Saturday":
                case "Sunday": price = 3.00 * quantity;break;
                default : console.log("error");break;            
            }
            break;
        case "pineapple" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 5.50 * quantity;break;
                case "Saturday":
                case "Sunday": price = 5.60 * quantity;break;
                default : console.log("error");break;          
            }
            break;  
        case "grapes" :
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": price = 3.85 * quantity;break;
                case "Saturday":
                case "Sunday": price = 4.20 * quantity;break;
                default : console.log("error");break;            
            }
            break;   
        default : console.log("error");break;            
    
    }
    
    if(price === 0 ){
       
    }else{
        console.log(price.toFixed(2));

    }

}
fruitShop(["apple","Tuesday","2"]);
fruitShop(["orange","Sunday","3"]);
fruitShop(["kiwi","Monday","2.5"]);
fruitShop(["grapes","Saturday","0.5"]);
fruitShop(["tomato","Monday","0.5"]);




