var assert = require('assert');

function first() {
    return this;
}

var functionScoped = first();
assert.strictEqual(functionScoped, global);

var obj = {};
obj.myMethod = first;
var methodScoped = obj.myMethod();
assert.strictEqual(methodScoped, obj);

var callScoped = first.call(obj);
assert.strictEqual(callScoped, obj);

var callScoped2 = first.call(undefined);
assert.strictEqual(callScoped2, global);

var applyScoped = first.apply(obj, []);
assert.strictEqual(applyScoped, obj);

var newFirst = new first();
assert(Object.getOwnPropertyNames(newFirst).length === 0); // checks for empty object
