let animals=[
    {name:'Edyta', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species:'fish'},
]


// tradycyjny sposób:

// let dogs=[]

// for (let i=0; i<animals.length; i++){
//     if(animals[i].species==='dog')
//     dogs.push(animals[i])
// }
// console.log(dogs)



// metoda  filter

// I sposób:
// let dogs=animals.filter(function(animal){
//     return animal.species==='dog'
// })

// II sposób:
// let dogs=animals.filter(animal=>animal.species==='dog')

//III sposób:
let isDog=function(animal){
    return animal.species==='dog'
}
let dogs=animals.filter(isDog)
// let otherAnimals=animals.reject(isDog)


// console.log(otherAnimals)
console.log(dogs)


