function book(title, author) {
    this.title = title;
    this.author = author;
    this.informationAdd = new Array();
}

book.prototype.information=function() {
    console.log(`"Tytuł:" ${this.title} "autor:" ${this.author}`)
}


const book1 = new book("W pustyni i w puszczy", "Henryk Sienkiewicz");
const book2 = new book("Pan Tadeusz", "Adam Mickiewicz");

book1.informationAdd[0] = "gruba okładka";
book1.informationAdd[1] = "liczba stron 600";

book2.informationAdd[0] = "brak informacji";
book2.informationAdd[1] = "liczba stron 400";

book1.information()
console.log(book1.informationAdd[0])
console.log(book1.informationAdd[1])

book2.information()
console.log(book2.informationAdd[0])
console.log(book2.informationAdd[1])

console.log(book1 instanceof book)
console.log(book2 instanceof book)