APP = {};

lesson("about classical inheritance", function() {
    beforeEach(function(){

        APP.Pet = function (name) {
            this.getName = function() { return name; };
            this.setName = function(newName) { name = newName; };
        };
        APP.Pet.prototype.toString = function() {
            return "This pet's name is: " + this.getName();
        };

        APP.Cat = function (name, color) {
            APP.Pet.call(this, name); // borrow the constructor
            this.getColor = function() { return color; };
        };
        APP.Cat.prototype = new APP.Pet();

        APP.Dog = function (name, breed) {
            APP.Pet.call(this, name); // borrow the constructor
            this.getBreed = function() { return breed; };
        };
        APP.Dog.prototype = new APP.Pet();
        APP.Dog.prototype.toString = function() {
            return "This dog's name is: " + this.getName() + ", and its breed is: " + this.getBreed();
        };

        this.myPet = new APP.Pet("Squishy");
        this.myCat = new APP.Cat("Java", "black");
        this.myDog = new APP.Dog("Bello", "Pudel");
    });

    learn("about types of derived objects", function(){
        expect(this.myPet instanceof APP.Pet).toBe(FILL_ME_IN);
        expect(this.myCat instanceof APP.Pet).toBe(FILL_ME_IN);
        expect(this.myDog instanceof APP.Pet).toBe(FILL_ME_IN);
        expect(this.myCat instanceof APP.Cat).toBe(FILL_ME_IN);
        expect(this.myDog instanceof APP.Dog).toBe(FILL_ME_IN);
        expect(this.myDog instanceof APP.Cat).toBe(FILL_ME_IN);
    });

    learn("about calling derived methods on objects", function() {
        expect(this.myPet.toString()).toEqual(FILL_ME_IN);
        expect(this.myCat.toString()).toEqual(FILL_ME_IN);
        expect(this.myDog.toString()).toEqual(FILL_ME_IN);
    });

    learn("about extending the prototype of an object", function() {
        APP.Cat.prototype.toString = function(){
            return "This cat's name is: " + this.getName() + ", and its color is: " + this.getColor();
        };
        expect(this.myCat.toString()).toEqual(FILL_ME_IN);
    });

    learn("that properties defined on the object precede properties on the prototype", function() {
        this.myDog.toString = function(){
            return "Wuff wuff wuff!";
        };
        expect(this.myDog.toString()).toEqual(FILL_ME_IN);
    });

    learn("that changing the prototype of the base class propagates to derived classes", function() {
        this.myPet.toString = function(){
            return "Squish squish squish";
        };

        APP.Pet.prototype.toString = function(){
            return "Squash squash squash";
        };

        expect(this.myPet.toString()).toEqual(FILL_ME_IN);
        expect(this.myCat.toString()).toEqual(FILL_ME_IN);
    });

    learn("about changing the protoype", function(){
        APP.Cat.prototype = {};

        var secondCat = new APP.Cat();

        expect(this.myCat.toString()).toBe(FILL_ME_IN);
        expect(secondCat.toString()).toBe(FILL_ME_IN);

    })
});

lesson("About prototypal inheritance", function() {
    beforeEach(function(){

        // Note: Object.create is only available in ES5
        // See http://kangax.github.io/es5-compat-table/
        // For an alternative see: http://javascript.crockford.com/prototypal.html

        APP.Pet = function () {
            this.name = "Anonymous";
            this.getName = function() { return this.name; };
        };
        APP.Pet.prototype.toString = function() {
            return "This pet's name is: " + this.getName();
        };

        this.myPet = new APP.Pet();
        this.myDog = Object.create(this.myPet);

        this.myDog.name = "Bello";
    });

    learn("about types of derived objects", function(){
        expect(this.myPet instanceof APP.Pet).toBe(FILL_ME_IN);
        expect(this.myDog instanceof APP.Pet).toBe(FILL_ME_IN);

        var myPudel = Object.create(this.myDog);
        expect(myPudel instanceof APP.Pet).toBe(FILL_ME_IN);
    });

    learn("about derived properties", function() {
        expect(this.myPet.getName()).toEqual(FILL_ME_IN);
        expect(this.myDog.getName()).toEqual(FILL_ME_IN);
        expect(this.myPet.toString()).toEqual(FILL_ME_IN);
        expect(this.myDog.toString()).toEqual(FILL_ME_IN);

        var myPudel = Object.create(this.myDog);
        expect(myPudel.getName()).toEqual(FILL_ME_IN);

        myPudel.name = "Cornelius";
        expect(myPudel.getName()).toEqual(FILL_ME_IN);
        expect(this.myDog.getName()).toEqual(FILL_ME_IN);
    });

    learn("about the prototype chain", function() {
        expect(Object.getPrototypeOf(this.myDog)).toBe(this.myPet);

        var myPudel = Object.create(this.myDog);
        expect(Object.getPrototypeOf(myPudel)).toBe(FILL_ME_IN);
        expect(Object.getPrototypeOf(Object.getPrototypeOf(myPudel))).toBe(FILL_ME_IN);
    });

    learn("that prototypal inheritance works well with object literals", function() {
        var animal = { eats: true };
        var rabbit = Object.create(animal);

        expect(rabbit.eats).toBe(FILL_ME_IN);
        expect(rabbit.hasOwnProperty("eats")).toBe(FILL_ME_IN);

        rabbit.eats = false;

        expect(rabbit.eats).toBe(FILL_ME_IN);
        expect(animal.eats).toBe(FILL_ME_IN);
        expect(rabbit.hasOwnProperty("eats")).toBe(FILL_ME_IN);
    });
});
