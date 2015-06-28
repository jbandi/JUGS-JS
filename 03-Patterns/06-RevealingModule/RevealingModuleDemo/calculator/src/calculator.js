var calculator = function() {
    var equationElement,
        currentValueElement,
        operator,
        operatorSet = false,
        equalsPressed = false,
        lastNumber = null,

        init = function(equationEl, currentValueEl) {
            equationElement = equationEl;
            currentValueElement = currentValueEl;
        },

        add = function(x, y) {
            return x + y;
        },

        subtract = function(x, y) {
            return x - y;
        },

        multiply = function(x, y) {
            return x * y;
        },

        divide = function(x, y) {
            if (y === 0) {
                alert("Can't divide by 0");
                return 0;
            }
            return x / y;
        },

        setVal = function(val) {
            currentValueElement.innerHTML = val;
        },

        setEquation = function(val) {
            equationElement.innerHTML = val;
        },

        clearNumbers = function() {
            lastNumber = null;
            equalsPressed = operatorSet = false;
            setVal('0');
            setEquation('');
        },

        setOperator = function(newOperator) {
            if (newOperator === '=') {
                equalsPressed = true;
                calculate();
                setEquation('');
                return;
            }

            //Handle case where = was pressed
            //followed by an operator (+, -, *, /)
            if (!equalsPressed) calculate();
            equalsPressed = false;
            operator = newOperator;
            operatorSet = true;
            lastNumber = parseFloat(currentValueElement.innerHTML);
            var eqText = (equationElement.innerHTML == '') ?
                lastNumber + ' ' + operator + ' ' :
                equationElement.innerHTML + ' ' + operator + ' ';
            setEquation(eqText);
        },

        numberClick = function(e) {
            var button = (e.target) ? e.target : e.srcElement;
            if (operatorSet === true || currentValueElement.innerHTML == '0') {
                setVal('');
                operatorSet = false;
            }
            setVal(currentValueElement.innerHTML + button.innerHTML);
            setEquation(equationElement.innerHTML + button.innerHTML);
        },

        calculate = function() {
            if (!operator || lastNumber == null) return;
            var currNumber = parseFloat(currentValueElement.innerHTML),
                newVal = 0;
            switch (operator) {
            case '+':
                newVal = add(lastNumber, currNumber);
                break;
            case '-':
                newVal = subtract(lastNumber, currNumber);
                break;
            case '*':
                newVal = multiply(lastNumber, currNumber);
                break;
            case '/':
                newVal = divide(lastNumber, currNumber);
                break;
            }
            setVal(newVal);
            lastNumber = newVal;
        };

    return {
        init: init,
        numberClick: numberClick,
        setOperator: setOperator,
        clearNumbers: clearNumbers
    };
}();