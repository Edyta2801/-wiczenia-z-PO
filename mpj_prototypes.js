function talk(){
    //console.log(this)
    console.log(this.sound)
}
talk()//undefined

let animal={
    talk
}
let cat={
    sound:'meow'
}

Object.setPrototypeOf(cat, animal)
cat.talk()//'meow'

let dog={
    sound:'woof'
}
Object.setPrototypeOf(dog, animal)
dog.talk()

let prerieDog={
    howl:function(){
        console.log(this.sound.toUpperCase())
    }
}
Object.setPrototypeOf(prerieDog,dog)
prerieDog.howl()//'WOOOF'

