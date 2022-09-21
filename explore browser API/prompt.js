

const showAlert = () => {
    const numbers = Math.random() * 10;
    if(numbers < 5){
        alert('whats happen');
    }
   
}

const askSomething = () => {
    const decision = confirm('are you there');
    // prompt('ask something');
    console.log(decision)
    if(decision === true){
        alert('give me some money');
    }
    else{
        alert('DGM || Dure Giya Mor');
    }
} 

const getUserInfo = () => {
    // prompt('tell us your name');
    prompt('tell us your name', 'example: Ahasan');
//    const name = prompt('tell us your name');
//    console.log(name);
//    if(!!name){
//     console.log('welcome here', name);
//    }
}