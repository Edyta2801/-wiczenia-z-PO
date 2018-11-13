// let me='Bruce Wayne'
// function greetMe(){
//     console.log('Hello,'+me+'!')
// }

// me='Batman'
// greetMe()


function sendRequest(){
    let requestID='123'
    $.ajax({
        url:'/myUrl',
        success:function(response){
            alert('Request'+requestID+ 'returned')
        }
    });
}
