function hotelRoom(input){
    let month = input[0];
    let nightsCount = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;


    switch(month){
        case "May" :
        case "October" :
            if(nightsCount > 7 && nightsCount <= 14){
                apartmentPrice = 65 * nightsCount;
                studioPrice = 50 * nightsCount * 0.95;
            }else if(nightsCount > 14){
                apartmentPrice = 65 * nightsCount * 0.90;
                studioPrice = 50 * nightsCount * 0.70;
            }else{
                apartmentPrice = 65 * nightsCount;
                studioPrice = 50 * nightsCount ;

            }
            break;
        case "June" :
        case "September" :
            if(nightsCount > 14){
                apartmentPrice = 68.70 * nightsCount * 0.90;
                studioPrice = 75.20 * nightsCount * 0.80;
            }else{
                apartmentPrice = 68.70 * nightsCount;
                studioPrice = 75.20 * nightsCount;

            }
            break;
        case "July" :
        case "August" :
            if(nightsCount > 14){
                apartmentPrice = 77 * nightsCount * 0.90;
                studioPrice = 76 * nightsCount;
            }else{
                apartmentPrice = 77 * nightsCount;
                studioPrice = 76* nightsCount;

            }
            break;


    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);

