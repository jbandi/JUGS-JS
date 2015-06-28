lesson("About Functions", function() {

    learn("how to declare functions", function() {

        function add(a, b) {
            return a + b;
        }

        expect(add(1, 2)).toBe(FILL_ME_IN);
    });

    
    name = "Global"; // This variable leaks to the global object, because it is not declared with the 'var' keyword
    var doIt = function(begin, end) {
        // 'this' has a different value depending on the way ho the method is invoked
        return begin + this.name + end;
    };

    learn("how to call functions", function(){

        expect(doIt("Hello ", ". Goodbye!")).toBe(FILL_ME_IN);
        expect(doIt.call({name: "Object"}, "Hello ", ". Goodbye!")).toBe(FILL_ME_IN);
        expect(doIt.apply({name: "Object"}, ["Hello ", ". Goodbye!"])).toBe(FILL_ME_IN);

    });

    learn("about function hoisting", function(){
        function a(){
            return doSomething(); // A function declaration can be used before it is declared

            function doSomething(){
                return 1;
            }
        }

        function b(){
            try {
                return doSomething(); // An anonymous function expression can only be used after it has ben instantiated
            }
            catch (e) {
                return 2;
            }

            var doSomething = function (){
                return 1;
            }
        }

        expect(a()).toBe(FILL_ME_IN);
        expect(b()).toBe(FILL_ME_IN);
    });

    learn("how to pass functions as values", function () {

        var appendRules = function (name) {
            return name + " rules!";
        };

        var appendDoubleRules = function (name) {
            return name + " totally rules!";
        };

        // assign functions to other variables
        var extraPraise = true;
        var myPraisingFunction = extraPraise ? appendDoubleRules : appendRules;
        expect(myPraisingFunction("Jane")).toBe(FILL_ME_IN); 

        // assign functions to object properties
        var praiseSinger = { givePraise: appendRules };
        expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

        praiseSinger.givePraise = appendDoubleRules;
        expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
    });

    learn("how function arguments are handled", function () {

        function returnFirstArg(firstArg) {
            return firstArg;
        }

        expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

        function returnSecondArg(firstArg, secondArg) {
            return secondArg;
        }

        expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

        function returnAllArgs() {
            var argsArray = [];
            for (var i = 0; i < arguments.length; i += 1) {
                argsArray.push(arguments[i]);
            }
            return argsArray.join(",");
        }

        expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
    });

    learn("that internal variables override outer variables", function () {
        var message = "Outer";

        function getMessage() {
            return message;
        }

        function overrideMessage() {
            var message = "Inner";
            return message;
        }

        expect(getMessage()).toBe(FILL_ME_IN);
        expect(overrideMessage()).toBe(FILL_ME_IN);
        expect(message).toBe(FILL_ME_IN);
    });

    learn("about function scoping and closures", function () {
        var variable = "top-level";
        function parentfunction() {
            var variable = "local";
            function childfunction() {
                return variable;
            }
            return childfunction();
        }
        expect(parentfunction()).toBe(FILL_ME_IN);
    });

    learn("even more about closures", function(){
        var x = 1;

        var fun = function(){
            return x;
        }

        var closure = (function(){
            var that = x;
            return function(){
                return that;
            }
        })();

        x = 2;

        expect(fun()).toBe(FILL_ME_IN);
        expect(closure()).toBe(FILL_ME_IN);
    });

    learn("still more about closures", function(){

        var input = [1,2,3,4];
        var functions = [];
        var closures = [];

        for (var i = 0; i < 3; i++){
            functions.push(function(){return input[i];});
        }

        var sum1 = 0;
        for (var j = 0; j < functions.length; j++) {
            sum1 += functions[j]();
        }

        for (var k = 0; k < 3; k++){
            closures.push((function(){ var v = input[k]; return function(){ return v;}})());
        }
        var sum2 = 0;
        for (var l = 0; l < closures.length; l++) {
            console.log(closures[l]());
            sum2 += closures[l]();
        }

        expect(sum1).toBe(FILL_ME_IN);
        expect(sum2).toBe(FILL_ME_IN);
    });

    learn("how to use lexical scoping to synthesize functions (partial function application)", function () {

        function makeMysteryFunction(makerValue)
        {
            var newFunction = function doMysteriousThing(param)
            {
                return makerValue + param;
            };
            return newFunction;
        }

        var mysteryFunction3 = makeMysteryFunction(3);
        var mysteryFunction5 = makeMysteryFunction(5);

        expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
    });

    learn("about currying", function(){
        var curry = function () {
            var firstCallArgs = Array.prototype.slice.call(arguments),
                func = firstCallArgs.pop();

            return function () {
                var secondCallArgs = Array.prototype.slice.call(arguments);
                return func.apply(this, firstCallArgs.concat(secondCallArgs));
            };
        };

        var sum = function(a, b) {
            return a + b;
        };

        var concat = function() {
            var buf = "";
            for (var i = 0; i < arguments.length; i++) {
                if (i != 0) buf += " ";
                buf += arguments[i];
            }
            return buf;
        };

        expect(curry(10, sum)(32)).toBe(FILL_ME_IN);
        expect(curry("Higher", "order", "functions", concat)("add", "more", "power", "to", "JavaScript")).toBe(FILL_ME_IN);
    });
});
