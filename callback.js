function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}


function greet(name) {
    console.log('Good Morning', name);
}
function greet1(name) {
    console.log('Good afternoon', name);
}

welcomeMessage('leon', greet);
welcomeMessage('Tahjib', greet1);