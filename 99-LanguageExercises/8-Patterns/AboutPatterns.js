/*global lesson, learn */

lesson("About Patterns", function () {

  learn("about the module pattern", function() {

      var myVatCalculatorModule = (function(vat){
          var fraction = vat/100; // a private variable

          // a private method
          var calculateVat = function(price){
              return price * fraction;
          };

          return {
              getPriceWithVat : function(price){
                  return price + calculateVat(price);
              }
          }
      })(3);

      expect(myVatCalculatorModule.getPriceWithVat(100)).toEqual(FILL_ME_IN);

  });

   learn("about the revealing module pattern", function() {

        var myVatCalculatorModule = (function(vat){
            var fraction = vat/100; // a private variable

            // a private method
            var calculateVat = function(price){
                return price * fraction;
            };

            // declare all methods
            var getPriceWithVat = function(price){
                return price + calculateVat(price);
            }

            // reveal the public methods as properties
            return {
                getPriceWithVat : getPriceWithVat
            }
        })(5);

        expect(myVatCalculatorModule.getPriceWithVat(100)).toEqual(FILL_ME_IN);
    });

    learn("about a pitfall with the revealing module pattern", function() {

        var myShape = (function(width, height){
            var dimensions = {
                width: width,
                height: height
            };
            var getDimensions = function(){
                return dimensions;
            };
            return {
                getDimensions: getDimensions
            };
        })(10,10);

        var dims = myShape.getDimensions();
        dims.width = 100;
        dims.height = 100;

        expect(myShape.getDimensions().width).toBe(FILL_ME_IN);
    });

    learn("about exposing immutable objects", function() {

        var myShape = (function(width, height){
            var dimensions = {
                width: width,
                height: height
            };
            var getDimensions = function(){
                return jQuery.extend(true, {}, dimensions); //create a deep copy with jQuery
            };
            return {
                getDimensions: getDimensions
            };
        })(10,10);

        var dims = myShape.getDimensions();
        dims.width = 100;
        dims.height = 100;

        expect(myShape.getDimensions().width).toBe(FILL_ME_IN);
    });

});
