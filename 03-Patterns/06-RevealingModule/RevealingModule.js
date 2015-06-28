
var calcModule = (function(){
    // private members
    var a = [1,2,3];
    function calculate(){
        return (a[0]*a[1])+a[2];
    }
    function calcAndAdd(){
        return calculate() + 1;
    }
    function calcAndSubtract(){
        return calculate() - 1;
    }

    // public members
    return {
        add: calcAndAdd,
        subtract: calcAndSubtract
    }
})();

console.log(calcModule.add());
console.log(calcModule.subtract());

// TODO: Its also possible to expose methods that take paremeters
// i.e: console.log(calcModule.add(100));