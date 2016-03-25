/// <reference path="jasmine.d.ts" />
/// <reference path="../src/calc.ts" />
var BarfCalculator = Calculator.BarfCalculator;
var CalculatorInput = Calculator.CalculatorInput;
var calc = new BarfCalculator();
it('calc is not null', function () { return expect(calc).not.toBeNull(); });
var testInput1 = new CalculatorInput();
testInput1.bodyMass = 25;
testInput1.gender = 0.005;
testInput1.size = 0.02;
testInput1.fertility = -0.005;
testInput1.age = 0;
testInput1.activityLevel = 0;
testInput1.furType = 0;
testInput1.goal = 0;
var result1 = calc.calculate(testInput1);
it("result of calculation should be 0,5", function () { return expect(result1).toEqual(0.5); });
// var inputValue = (<HTMLInputElement>document.getElementById("test")).value;
// alert(inputValue);    <br />
//# sourceMappingURL=calc-tests.js.map