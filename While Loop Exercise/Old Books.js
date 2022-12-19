function oldBooks(input) {
    let index = 0;
    let bookNeeded = input[index];
    index++;
    let currentBook = input[index];
    index++;
    let booksChecked = 0;

    while (currentBook !== "No More Books") {
        if (currentBook === bookNeeded) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;
        }

        booksChecked++;
        currentBook = input[index];
        index++;

    }
    console.log("The book you search is not here!");
    console.log(`You checked ${booksChecked} books.`);


}
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);
oldBooks(["Troy","Stronger","Life Style","Troy"]);
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);




