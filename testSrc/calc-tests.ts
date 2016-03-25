/// <reference path="jasmine.d.ts" />
/// <reference path="../src/calc.ts" />

import BarfCalculator = Calculator.BarfCalculator;
import CalculatorInput = Calculator.CalculatorInput;

var calc: BarfCalculator = new BarfCalculator();

it('calc is not null', () => expect(calc).not.toBeNull());

var testInput1: CalculatorInput = new CalculatorInput();
testInput1.bodyMass = 25;

testInput1.gender = 0.005;
testInput1.size = 0.02;
testInput1.fertility = -0.005;
testInput1.age = 0;
testInput1.activityLevel = 0;
testInput1.furType = 0;
testInput1.goal = 0;

var result1: number = calc.calculate(testInput1);

it("result of calculation should be 0,5", () => expect(result1).toEqual(0.5));

// var inputValue = (<HTMLInputElement>document.getElementById("test")).value;
// alert(inputValue);    <br />
