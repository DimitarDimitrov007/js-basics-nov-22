function sleepyTomCat(input){
    let daysOff = Number(input[0]);

    let workingDays = 365 - daysOff;
    let timeWithCat = (workingDays * 63) + (daysOff * 127);
    let diff = Math.abs(30000 - timeWithCat);
       let h = Math.floor(diff / 60);
       let m = diff % 60;

      if(timeWithCat > 30000){
        console.log("Tom will run away");
        console.log(`${h} hours and ${m} minutes more for play`);

      }else{
        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`);
      }

}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
