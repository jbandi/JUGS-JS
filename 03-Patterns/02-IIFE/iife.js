var res = (function() {
    var a = 1;
    function innerFunction() {
        return a + 1;
    };
    return innerFunction();
})();

console.log(res);