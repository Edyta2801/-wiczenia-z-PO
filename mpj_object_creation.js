let dog={
    sound:'woof',
    talk:function(){
        console.log(this.sound)
    }
}
dog.talk()

// let talkFunction=dog.talk
// //talkFunction() //undefined, ponieważ this.sound nie jest przypisany do funkcji
//  let boundFunction=talkFunction.bind(dog)
// //połączenie bind powoduje  przypisanie this do dog
//  boundFunction()//'woof


 let button= document.getElementById('MyButton')

 button.addEventListener(
     'click',
     dog.talk.bind(dog)
 )
console.log(button)





