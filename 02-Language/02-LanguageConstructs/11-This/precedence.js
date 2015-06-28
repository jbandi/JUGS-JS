// Run the following snippets in theNode REPL or in the browser console
// Executing as a Node script does not work, since Node provides a local scope for every node module


function something() {
  this.hello = "hello";
  console.log(this.hello, this.who);
}

var who = "global",
    obj1 = { who: "obj1", something: something },
    obj2 = { who: "obj2" },
    foobar, bazbam;

// Quiz:

something();
console.log(hello);

// obj1.something();
// console.log(obj1.hello);
//
// obj1.something.call(obj2);
// console.log(obj2.hello);
//
// foobar = something.bind(obj2);
// foobar();
// foobar.call(obj1);
//
// bazbam = new something();
// console.log(bazbam.hello);
//
// bazbam = new obj1.something();
// bazbam = new foobar();
