var arr = [1, 2, 3], out = [], result = '';

for (var i = 0; i < arr.length; i++) {
  var item = arr[i];
  out.push(
      function() { return item; }
    );
}

out.forEach(function (func) {
  result += func();
});

console.log(result);