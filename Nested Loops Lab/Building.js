function building(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let result = "";

    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j < roomsPerFloor; j++) {
            if (i === floors) {
                if (j === roomsPerFloor - 1) {
                    result = result + "L" + i + j;
                } else {
                    result = result + "L" + i + j + " ";

                }

            } else if (i % 2 === 0) {
                if (j === roomsPerFloor - 1) {
                    result = result + "O" + i + j;
                } else {
                    result = result + "O" + i + j + " ";
                }

            } else {
                if (j === roomsPerFloor - 1) {
                    result = result + "A" + i + j;
                } else {
                    result = result + "A" + i + j + " ";

                }
            }
        }
        console.log(result );
        result = "";

    }

}
building(["6", "4"]);