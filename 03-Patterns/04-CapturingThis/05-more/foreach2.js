function Controller(){

    var self = this;

    self.country = 'Switzerland';

    self.cities = ['Basel', 'Bern', 'Zürich'];


    self.print = function(){

        self.cities.forEach(function(elem){

            console.log(self.country + ': ' + elem);
        });
    }
}

var ctrl = new Controller();
ctrl.print();