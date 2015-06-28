function outerFunction() {
    var a = 1;
    function innerFunction() {
        return a + 1;
    }
    return innerFunction();
}

console.log(outerFunction());
