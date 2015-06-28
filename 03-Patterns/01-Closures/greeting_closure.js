var name = 'Bob';
function getGreetingClosure() {
    var text = 'Hello ' + name;
    return function() {
        console.log(text);
    };
}

var sayHello = getGreetingClosure();

name = "Tim";
sayHello();
