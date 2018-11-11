function book(title, author){
     this.title=title;
     this.author=author;
     this.bookInformation=function(){
         console.log(` ${this.title} ${this.author}`)
     }
}
 const book1=new book ("W pustyni i w puszczy", "Henryk Sienkiewicz");
 const book2=new book ("Granica", "Zofia Nałkowska");

 console.log(book1 instanceof book);
 console.log(book2 instanceof book);

 book1.bookInformation()
 book2.bookInformation()