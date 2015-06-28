function Controller(){

    this.count = 0;

    this.increment = function(){
        this.count++;
        alert(this.count);
    }
}

