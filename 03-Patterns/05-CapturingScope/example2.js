var arr = [1, 2, 3], out = [], result = "";

for (var i = 0; i < arr.length; i++) {
  out.push((function(){ 
      var item = arr[i]; 
      return function() { return item; };
    })()
);
}

out.forEach(function (func) {
  result += func();
});

console.log(result);