0 == 0
0 == '0'
0 == ''

false == false
false == 'false'
false == '0'

"\n \t" == 0

var myArray = [0]; 
myArray == myArray; 
myArray == !myArray

var myArray = [null, undefined, []]; 
myArray == ',,'

NaN === NaN
NaN !== NaN
typeof NaN

0.1 + 0.2
((0.1 + 0.2) + 0.3)
(0.1 + (0.2 + 0.3))

Math.min() < Math.max()

parseInt("12 Monkeys")

var ar = ['i', 'j', 'k'];
for(v in ar){ console.log(v) };


print = function(v){console.log(v); return v;};
['10', '10', '10'].map(print);
['10', '10', '10'].map(parseInt);	