function cinemaTickets(input) {
    index = 0;
    let movieName = input[index];
    index++;
    let standardCounter = 0;
    let kidCounter = 0;
    let studentCounter = 0;

    while (movieName !== "Finish") {
        let spacesAvailable = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let spacesTaken = 0;

        while (ticketType !== "End") {
            spacesTaken++;
            if (ticketType === "student") {
                studentCounter++;
            } else if (ticketType === "kid") {
                kidCounter++;
            } else {
                standardCounter++;
            }

            if (spacesTaken === spacesAvailable) {
                break;
            }

            ticketType = input[index];
            index++;

        }
        let percent = ((spacesTaken / spacesAvailable) * 100);

        console.log(`${movieName} - ${percent.toFixed(2)}% full.`);

        movieName = input[index];
        index++;


    }

    let totalTickets = standardCounter + studentCounter + kidCounter;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentCounter / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCounter / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidCounter / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);
