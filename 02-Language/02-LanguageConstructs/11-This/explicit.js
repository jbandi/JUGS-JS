function print(){
  console.log(this.message);
}

var controller = {
  message: 'Hello!',
  greet: print
}

// Calling print as a method
controller.greet();

// Callback is not coupled with the object
setTimeout(controller.greet);

// Callback is a new function that calls print as a method
// setTimeout(function(){controller.greet()});
// //controller = {}; // This breaks above trick!

// Create a function that explicitly defines this
// function bind(fn, object){
//   return function(){
//     fn.apply(object)
//   }
// }
//
// setTimeout(bind(print, controller));
// //controller = {}; // Does not break above trick

// Use ES5 bind()
//setTimeout(print.bind(controller));
//setTimeout(controller.greet.bind(controller));
