function trekkingMania(input){
    let totalGroups = Number(input[0]);

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for( let i = 1; i < input.length; i+=1){
        let peopleInGroup = Number(input[i]);
        if(peopleInGroup <= 5){
            musalaGroup += peopleInGroup;

        }else if(peopleInGroup <= 12){
            monblanGroup += peopleInGroup;

        }else if(peopleInGroup <= 25){
            kilimanjaroGroup += peopleInGroup;

        }else if(peopleInGroup <= 40){
            k2Group += peopleInGroup;

        }else if( peopleInGroup >= 41){
            everestGroup += peopleInGroup;

        }
    }

    let allPeople = musalaGroup + monblanGroup + kilimanjaroGroup + k2Group + everestGroup;

    console.log(`${((musalaGroup / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblanGroup / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroGroup / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2Group / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((everestGroup/ allPeople) * 100).toFixed(2)}%`);

}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);
trekkingMania(["5","25","41","31","250","6"]);


    
