function Person(saying){
    this.saying=saying
}
Person.prototype.talk=function(){
    console.log('I say', this.saying)
}
// let crockford=new Person('SEMICOLANS')
// crockford.talk()


// new
// 1. Create a new object,
// 2. Set a prototype
// 3. Execute constructor with 'this'
// 4. Return the created object



function spawn (constructor){
    var obj={}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray=Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}
var crockford=spawn(Person, 'SEMICOLANS')
crockford.talk()


