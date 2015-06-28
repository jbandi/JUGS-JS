var car = {};


car.start = function(){
    var that = this;

    that.starter = {};
    that.starter.active = false;

    var activateStarter = function(){
        // 'this' now points to the global scope and 'this.starter' is undefined
        that.starter.active = true;
    };

    activateStarter();
};

car.start();
