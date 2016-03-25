var Calculator;
(function (Calculator) {
    var BarfCalculator = (function () {
        function BarfCalculator() {
        }
        BarfCalculator.prototype.calculate = function (input) {
            var result = 0;
            var arr = [
                input.gender,
                input.size,
                input.fertility,
                input.age,
                input.activityLevel,
                input.furType,
                input.goal
            ];
            var multiplier = arr.reduce(function (a, b) { return a + b; });
            result = input.bodyMass * multiplier;
            return result;
        };
        return BarfCalculator;
    }());
    Calculator.BarfCalculator = BarfCalculator;
    var CalculatorController = (function () {
        function CalculatorController() {
            this.calculator = new BarfCalculator();
            this.factory = new CalculatorInputFactory();
        }
        CalculatorController.prototype.createResult = function () {
            var userInput = this.factory.getInput();
            var result = this.calculator.calculate(userInput);
            //print result in the html
            //alert(result);
            var resultContainer = document.getElementById("result_container");
            resultContainer.innerText = String(Math.round(result * 1000)) + " g";
        };
        return CalculatorController;
    }());
    Calculator.CalculatorController = CalculatorController;
    var CalculatorInputFactory = (function () {
        function CalculatorInputFactory() {
        }
        CalculatorInputFactory.prototype.getInput = function () {
            var input = new CalculatorInput();
            input.bodyMass = Number(document.getElementById("weight").value);
            input.gender = Number(document.getElementById("gender").value);
            input.size = Number(document.getElementById("size").value);
            input.fertility = Number(document.getElementById("fertility").value);
            input.age = Number(document.getElementById("age").value);
            input.activityLevel = Number(document.getElementById("activity").value);
            input.furType = Number(document.getElementById("fur").value);
            input.goal = Number(document.getElementById("goal").value);
            return input;
        };
        return CalculatorInputFactory;
    }());
    Calculator.CalculatorInputFactory = CalculatorInputFactory;
    var CalculatorInput = (function () {
        function CalculatorInput() {
            this.bodyMass = 0; //initial input parameter
            this.gender = 0; // male: +0.005; female: 0; female+puppies: +0.005;
            this.size = 0; // normal,big: 0.02; mini (<7kg):0.065;
            this.fertility = 0; // yes: 0; no: -0.005;
            this.age = 0; // adult: 0; puppy (<1.5yo): +0.07; old (+8yo): +0.005;
            this.activityLevel = 0; // normal: 0; active: +0.005;
            this.furType = 0; // full cover: 0; short cover: +0.005;
            this.goal = 0; // gain weight: +0.005; lose weight: -0.005; weight ok: 0;
        }
        return CalculatorInput;
    }());
    Calculator.CalculatorInput = CalculatorInput;
    function initialize() {
        var formElement = document.getElementById("calculator_form");
        formElement.addEventListener("submit", function (event) { event.preventDefault(); });
        var controller = new CalculatorController();
        controller.createResult();
    }
    Calculator.initialize = initialize;
})(Calculator || (Calculator = {}));
//# sourceMappingURL=calc.js.map