function log(message) {
    console.log(message)
}
var message = "Hello world";
log(message);


function doSomething(){
    for (var i = 0; i < 5; i++) {
        console.log(i);
        
    }
    console.log("Finally: " + i);
}

doSomething();
