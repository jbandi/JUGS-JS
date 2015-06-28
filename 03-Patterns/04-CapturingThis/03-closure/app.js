var ctrl = new Controller();
var button = document.getElementById('button');
button.addEventListener('click', (function(o){ return function() { o.increment()}})(ctrl));
