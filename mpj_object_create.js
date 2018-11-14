const cat={
    init:function(sound){
        this.sound=sound
        return this
    },
    makeSound:function(){
        console.log(this.sound)
    }
}


// Poniżej funkcja jak działa object.objectCreate
// function objectCreate(proto){
//     const obj={}
//     Object.setPrototypeOf(obj,proto)
//     return obj
// }



const mark=Object.create(cat).init('miau')
mark.makeSound()


const waffles=Object.create(cat).init('mrrrr')
waffles.makeSound()

