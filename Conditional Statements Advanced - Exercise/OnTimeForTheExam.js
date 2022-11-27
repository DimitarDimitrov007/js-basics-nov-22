function onTimeForTheExam(input){
    let examStartHours = Number(input[0]);
    let examStartMinutes = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examTime = (examStartHours * 60) + examStartMinutes;
    let arrivalTime = (arrivalHours * 60) + arrivalMinutes;

    let diff = Math.abs(examTime - arrivalTime);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if(examTime < arrivalTime){
        console.log(`Late`);
        if(diff <60){
            console.log(`${m} minutes after the start`);
        }else{
            if(m < 10){
                console.log(`${h}:0${m} hours after the start`);
            }else{
                console.log(`${h}:${m} hours after the start`);
            }

        }
    }else if(examTime >= arrivalTime && examTime - arrivalTime <= 30){
        console.log(`On time`);
        if(diff > 0){
            console.log(`${m} minutes before the start`);
        }

    }else{
        console.log(`Early`);
        if(diff < 60){
            console.log(`${m} minutes before the start`);

        }else{
            if(m < 10){
                console.log(`${h}:0${m} hours before the start`);
            }else{
                console.log(`${h}:${m} hours before the start`);
            }
            
            
        }
    }


}
onTimeForTheExam(["9","30","9","50"]);
onTimeForTheExam(["9","00","10","30"]);
onTimeForTheExam(["10","00","10","00"]);
onTimeForTheExam(["9","00","8","30"]);
onTimeForTheExam(["14","00","13","55"]);
onTimeForTheExam(["11","30","10","55"]);
onTimeForTheExam(["16","00","15","00"]);
onTimeForTheExam(["11","30","8","12"]);
onTimeForTheExam(["11","30","12","29"]);


















