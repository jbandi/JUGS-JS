
lesson("About Classes and Namespaces", function () {

    learn("how to implement a class", function () {

        // See: http://javascript.crockford.com/private.html
        var myContainer = new Container('abc', 3);

        expect(myContainer.secret).toBe(FILL_ME_IN);
        expect(myContainer.member).toBe(FILL_ME_IN);
        expect(myContainer.stamp("def")).toBe(FILL_ME_IN);

        // Call service() 4 times
        expect(myContainer.service()).toBe(FILL_ME_IN);
        expect(myContainer.service()).toBe(FILL_ME_IN);
        expect(myContainer.service()).toBe(FILL_ME_IN);
        expect(myContainer.service()).toBe(FILL_ME_IN);
    });

    learn("how to implement a namespace", function () {

        // We have two definitions of product() in two different Namespaces
        var product1 = new NAMESPACE1.product();
        var product2 = new NAMESPACE2.product();

        expect(product1.getName()).toBe(FILL_ME_IN);
        expect(product2.getName()).toBe(FILL_ME_IN);
    });

    learn("how to use nested namespaces and a namespace function", function(){

        // See: http://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/
        expect(MYAPP.LOGIC.BUSINESS.getFavoriteProductDescription()).toBe(FILL_ME_IN);
    });

    ////////////////////////////////////////////////////////
    // Implementation
    ////////////////////////////////////////////////////////

    function Container(param, times) {
        this.member = param; // a public member
        var secret = times; // a private member
        function dec() {
            if (secret > 0) {
                secret -= 1;
                return true;
            } else {
                return false;
            }
        }

        // A privileged method, it can access private members
        this.service = function () {
            return dec() ? this.member : null;
        };
    }

    // A public method, it can only access public members
    Container.prototype.stamp = function (string) {
        return this.member + string;
    };

    var NAMESPACE1 = {
        product: function () {
            var name = "Ying!";
            this.getName = function () {
                return name;
            };
        }
    };

    var NAMESPACE2 = {
        product: function(){
            var name = "Yang!";
            this.getName = function(){
                return name;
            };
        }
    }

    var MYAPP = MYAPP || {};
    MYAPP.createNS = function (namespace) {
        var nsparts = namespace.split(".");
        var parent = MYAPP;

        // we want to be able to include or exclude the root namespace so we strip
        // it if it's in the namespace
        if (nsparts[0] === "MYAPP") {
            nsparts = nsparts.slice(1);
        }

        // loop through the parts and create a nested namespace if necessary
        for (var i = 0; i < nsparts.length; i++) {
            var partname = nsparts[i];
            // check if the current parent already has the namespace declared
            // if it isn't, then create it
            if (typeof parent[partname] === "undefined") {
                parent[partname] = {};
            }
            // get a reference to the deepest element in the hierarchy so far
            parent = parent[partname];
        }
        // the parent is now constructed with empty namespaces and can be used.
        // we return the outermost namespace
        return parent;
    };

    MYAPP.createNS("MYAPP.MODEL.PRODUCTS");
    MYAPP.createNS("MYAPP.LOGIC.BUSINESS");

    MYAPP.MODEL.PRODUCTS.product = function(name){
        this.name = name;
        this.getDescription = function(){
            return MYAPP.MODEL.PRODUCTS.countrycode + "-" + this.name;
        }
    };

    MYAPP.MODEL.PRODUCTS.countrycode = "CH";

    MYAPP.LOGIC.BUSINESS.getFavoriteProductDescription = function () {
        var model = MYAPP.MODEL.PRODUCTS;
        var p = new model.product("DustBuster");
        return p.getDescription();
    }

});