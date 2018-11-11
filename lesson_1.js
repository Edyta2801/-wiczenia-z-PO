function podajTytuł(){
    console.log(this.tytuł)
}
 
var książka=new Object();
var film=new Object();
var album=new Object();

książka.tytuł="JavaScript"
film.tytuł="Forest Gump"
album.tytuł="25"

książka.podajTytuł=podajTytuł;
film.podajTytuł=podajTytuł;
album.podajTytuł=podajTytuł;

książka.podajTytuł();
film.podajTytuł();
album.podajTytuł();

