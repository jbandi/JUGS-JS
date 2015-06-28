function Controller(){

    var self = this;

    self.count = 0;

    this.increment = function(){
        self.count++;
        alert(self.count);
    }
}

