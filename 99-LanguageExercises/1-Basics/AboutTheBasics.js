lesson("About Expectations", function () {

    learn("how to satisfy expectations", function () {
        var expectedTrue = FILL_ME_IN;
        var expectedFalse = FILL_ME_IN;
        expect(expectedTrue).toBeTruthy();
        expect(expectedFalse).toBeFalsy();
    });

    learn("how to expect equality", function () {
        var expectedValue = FILL_ME_IN;
        var actualValue = 1 + 1;

        expect(actualValue === expectedValue).toBeTruthy();
        expect(actualValue == expectedValue).toBeTruthy();
        expect(actualValue).toEqual(expectedValue);
        expect(actualValue).toBe(expectedValue);
    });

});

lesson("About Operators", function () {

    learn("how to add", function () {
        var result = 0;
        for (var i = 0; i <= 5; i++) {
            result = result + i;
        }
        result += 100;
        expect(result).toBe(FILL_ME_IN);
    });

    learn("how to subtract", function () {
        var result = 5;
        for (var i = 0; i <= 2; i++) {
            result = result - i;
        }
        result -= 100;
        expect(result).toBe(FILL_ME_IN);
    });

    learn("how to perform modulo", function () {
        var result = 10;
        var x = 3;
        result = result % x;
        expect(result).toBe(FILL_ME_IN);
    });

    learn("about string concatenation", function () {
        var s = "3" + FILL_ME_IN;
        expect(s).toBe("37");
    });
});

lesson("About Equality", function () {

    learn("about string literal equality", function () {
        var e = "World";
        var s = 'FILL_ME_IN';
        expect(s).toBe(e); //quote types do not matter
    });

    learn("about equality without type coercion", function () {
        var e = 3;
        var s = FILL_ME_IN;
        expect(e === s).toBeTruthy();
    });

    learn("about equality with type coercion", function () {
        var e = 3;
        var s = 'FILL_ME_IN'; // use a string!
        expect(e == s).toBeTruthy();
    });
});

lesson("About Truthyness", function () {

    learn("about truthyness of positive numbers", function () {
        var isTruthy = 42 ? true : false;
        expect(isTruthy).toBe(FILL_ME_IN);
    });

    learn("about truthyness of negative numbers", function () {
        var isTruthy = -42 ? true : false;
        expect(isTruthy).toBe(FILL_ME_IN);
    });

    learn("about truthyness of zero", function () {
        var isTruthy = 0 ? true : false;
        expect(isTruthy).toBe(FILL_ME_IN);
    });

    learn("about truthyness of null", function () {
        var isTruthy = null ? true : false;
        expect(isTruthy).toBe(FILL_ME_IN);
    });
});

lesson("About Variable Scope", function () {

    learn("the difference between local and global variables", function () {
        var isLocal = FILL_ME_IN;
        isGlobal = FILL_ME_IN;

        expect(isLocal).toBe(42);
        expect(window.isGlobal).toBe(42); //global variables are assigned to the window object
    });

    learn("that there is no lexical scope", function () {
        var arr = [1, 2, 3];
        var out = [];

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]; // there is only one 'item' variable that lives on the scope of the outer function
            out.push(function () {
                return item;
            });
        }

        var result = "";
        out.forEach(function (func) {
            result += func();
        });

        expect(result).toBe(FILL_ME_IN);
    });

    learn("how to use functions to provide private scope", function () {
        var arr = [1, 2, 3];
        var out = [];

        for (var i = 0; i < arr.length; i++) {
            (function () {
                var item = arr[i]; // this is a variable with "private" function scope
                out.push(function () {
                    return item;
                });
            })(); // this is called an "Immediately Invoked Function Expression" (IIFE)
        }

        var result = "";
        out.forEach(function (func) {
            result += func();
        });

        expect(result).toBe(FILL_ME_IN);
    });
});

lesson("about strict mode", function () {
    learn("about strict mode", function () {

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
        // http://www.w3schools.com/js/js_strict.asp
        // http://msdn.microsoft.com/en-us/library/br230269(v=vs.94).aspx

        function isNotStrictMode() {
            // Apply the '!' operator to an object to get 'true' or 'false' back
            return !this; // 'this' refers to global object
        }

        function isStrictMode() {
            "use strict";
            // Apply the '!' operator to an object to get 'true' or 'false' back
            return !this; // in strict mode, the keyword 'this' does not refer to the global object, unlike traditional JS. So here,'this' is undefined.
        }

        expect(isNotStrictMode()).toBe(FILL_ME_IN);
        expect(isStrictMode()).toBe(FILL_ME_IN);

    });
});


lesson("about errors and exceptions", function () {
    learn("about an error", function () {

        try {
            var a = xyz;
        } catch (e){
            expect(e.name).toBe(FILL_ME_IN);
        }
    });

    learn("about another error", function () {

        try {
            var a;
            a.x
        } catch (e){
            expect(e.name).toBe(FILL_ME_IN);
        }
    });

    learn("how to throw an exception", function () {

        function UserException(message) {
            this.message = message;
            this.name = "UserException";
        }

        try {
            throw new UserException("Throwing for fun!");
        } catch (e){
            expect(e.message).toBe(FILL_ME_IN);
        }
    });
});