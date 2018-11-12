let animals=[
    {name:'Edyta', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species:'fish'},
]

// let names=[]
// for (let i=0;i<animals.length; i++){
//     names.push(animals[i].name)
// }

// let names= animals.map(function (animal){
//     return animal.name+ 'is a' +animal.species})


let names= animals.map(animal=> animal.name)

console.log(names)