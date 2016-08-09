module Calculator {
    export class BarfCalculator {

        calculate(input:CalculatorInput):number {

            var result:number = 0;

            var arr:Array<number> = [
                input.gender,
                input.pregnant,
                input.size,
                input.fertility,
                input.age,
                input.activityLevel,
                input.furType,
                input.goal
            ];
            
            var multiplier:number = arr.reduce((a, b) => a + b);
            
            result = input.bodyMass * multiplier;
            
            return result;
        }

    }

    export class CalculatorController {

        calculator: BarfCalculator = new BarfCalculator();
        factory: CalculatorInputFactory = new CalculatorInputFactory();

        createResult() {
            var userInput: CalculatorInput = this.factory.getInput();
            var result: number = this.calculator.calculate(userInput);

            //print result in the html
            //alert(result);

            var resultContainer:HTMLDivElement = <HTMLDivElement>document.getElementById("result_container")
            resultContainer.innerText = String(Math.round(result * 1000)) + " g";
        }

    }

    export class CalculatorInputFactory {

        getInput(): CalculatorInput {
            var input = new CalculatorInput();

            input.bodyMass = Number((<HTMLInputElement>document.getElementById("weight")).value);
            input.gender = Number((<HTMLSelectElement>document.getElementById("gender")).value);
            input.size = Number((<HTMLSelectElement>document.getElementById("size")).value);
            input.fertility = Number((<HTMLSelectElement>document.getElementById("fertility")).value);
            input.age = Number((<HTMLSelectElement>document.getElementById("age")).value);
            input.activityLevel = Number((<HTMLSelectElement>document.getElementById("activity")).value);
            input.furType = Number((<HTMLSelectElement>document.getElementById("fur")).value);
            input.goal = Number((<HTMLSelectElement>document.getElementById("goal")).value);

            return input;
        }

    }
    
    export class CalculatorInput {

        public bodyMass:number = 0; //initial input parameter

        public gender:number = 0; // male: +0.005; female: 0; female+puppies: +0.005;
        public pregnant:number = 0; // female+puppies: +0.005;
        public size:number = 0; // normal,big: 0.02; mini (<7kg):0.065;
        public fertility:number = 0; // yes: 0; no: -0.005;
        public age:number = 0; // adult: 0; puppy (<1.5yo): +0.07; old (+8yo): +0.005;
        public activityLevel:number = 0; // normal: 0; active: +0.005;
        public furType:number = 0; // full cover: 0; short cover: +0.005;
        public goal:number = 0; // gain weight: +0.005; lose weight: -0.005; weight ok: 0;

    }

    export function initialize(): void {
        var formElement:HTMLFormElement = <HTMLFormElement>document.getElementById("calculator_form");
        formElement.addEventListener("submit", function (event) {event.preventDefault()});

        var controller: CalculatorController = new CalculatorController();
        controller.createResult();
    }
}

