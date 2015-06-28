var car = {};


car.start = function(){

    this.starter = {};
    this.starter.active = false;

    var activateStarter = function(){
        // 'this' now points to the global scope and 'this.starter' is undefined
        this.starter.active = true;
    };

    activateStarter();
};

car.start();
