// I
// function talk(sound){
//     console.log(sound)
// }
// talk('woooof')


// II
// function talk(sound){
//     console.log(this.sound)
// }
// talk() //undefined ponieważ this is window object

// III
// let boromir={
//     sound:'coś tam'
// }

// let talkBoundToBoromir=talk.bind(boromir)
// talkBoundToBoromir()
// talk() //undefined tutaj this jest obiektem globalnym window
// IV
// let talk=function(){
//     console.log(this.sound)
// }
// let boromir={
//     speak:talk,
//     sound:'coś tam'
// }
// boromir.speak() //właściwosc  boromir  object
// talk()//undefined

//  boromir.speak=talk.bind(boromir)//'coś tam' nowa kopia talk, ale this odnosi siędo boromir
//  boromir.speak=talk//undefined

//  V
 let talk=function(){
     console.log(this.sound)
 }

 let boromir={
     blabber:talk,
     sound:'blablabla'
 }
 let gollum={
     jabber:boromir.blabber,
     sound:'My  precioussss'
 }

 gollum.jabber()//'My preciousss''
