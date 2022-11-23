function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeFor1MeterInSec = Number(input[2]);

    let timeNeeded = distanceInM * timeFor1MeterInSec;
    let timesSlowed = Math.floor(distanceInM / 15);
    let additionalTime = timesSlowed * 12.5;
    timeNeeded = timeNeeded + additionalTime;

    if(timeNeeded < record){
        console.log(`Yes, he succeeded! The new world record is ${(timeNeeded).toFixed(2)} seconds.`);

    }else{
        console.log(`No, he failed! He was ${(timeNeeded - record).toFixed(2)} seconds slower.`);
    }


}
worldSwimmingRecord(["10464","1500","20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);

