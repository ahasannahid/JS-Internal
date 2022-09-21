function greeting(greetingHandler, name){
    // console.log(greetingHandler());
    greetingHandler(name);
}

// const name = 'ahasan nahid'


function greetingHandler (name){
    console.log('Good Morning', name);
}

function greetingEvening(name){
    console.log('Good Evening', name);
}

greeting(greetingHandler, 'Nahid')
greeting(greetingHandler, 'Ahasan')
greeting(greetingHandler, 'Habib')
greeting(greetingEvening, "Ahasan Nahid")