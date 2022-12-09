function hospital(input) {
    let numberOfDays = Number(input[0]);
    let doctors = 7;
    let curedPatients = 0;
    let notCuredPatients = 0;

    for (let i = 1; i <= numberOfDays; i += 1) {
        let patients = Number(input[i]);
        if (i % 3 === 0) {
            if (curedPatients < notCuredPatients) {
                doctors += 1;
            }
        }
        if (patients <= doctors) {
            curedPatients += patients;
        } else {
            notCuredPatients += (patients - doctors);
            curedPatients += doctors;
        }

    }

    console.log(`Treated patients: ${curedPatients}.`);
    console.log(`Untreated patients: ${notCuredPatients}.`);
}
    hospital([4, 7, 27, 9, 1]);
    hospital([6,25,25,25,25,25,2]);
    hospital([3,7,7,7]);