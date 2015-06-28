var assert = require('assert');

function myMethod() {
    return this.val;
}

var object1 = {
    get: myMethod,
    val:42
};

var object2 = {
    get: myMethod,
    val:3.14159
};

assert.equal(object1.get(), 42);
assert.equal(object2.get(), 3.14159);
assert.equal(myMethod(), undefined);

console.log(myMethod());