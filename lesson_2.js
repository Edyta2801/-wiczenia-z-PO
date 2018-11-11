// function changeFrame(element){
//     element.style.border="2px solid red";
// }


const akapity = document.querySelectorAll('div');
console.log(akapity)

akapity.forEach(function (akapit) {
    akapit.addEventListener('click', function (e) {
        e.style.border="2px solid red"
    })
})

