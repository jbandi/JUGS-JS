function Controller(){

    this.country = 'Switzerland';

    this.cities = ['Basel', 'Bern', 'Zürich'];


    this.print = function(){

        this.cities.forEach(function(elem){

            console.log(this.country + ': ' + elem);
        });
    }
}

var ctrl = new Controller();
ctrl.print();