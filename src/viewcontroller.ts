/**
 * Created by Bartek on 2016-04-03.
 */
module controller {
    export class ViewController {

        pregnancySelect:HTMLSelectElement;
        genderSelect:HTMLSelectElement;

        constructor() {
            this.pregnancySelect = <HTMLSelectElement>document.getElementById("pregnant");
            this.genderSelect = <HTMLSelectElement>document.getElementById("gender");
            this.genderSelect.addEventListener("change", this.onGenderSelect);
            this.pregnancySelect.addEventListener("change", this.onPregnancySelect);
        }

        onGenderSelect(e:Event) {
            var gender = <HTMLSelectElement>document.getElementById("gender");
            var pregnancy = <HTMLSelectElement>document.getElementById("pregnant");

            if(gender.value == "0") {
                pregnancy.disabled = false;
            }
            else {
                pregnancy.disabled = true;
                pregnancy.selectedIndex = 0;
            }
        }

        onPregnancySelect(e:Event) {
            var pregnancy = <HTMLSelectElement>document.getElementById("pregnant");
            var fertility = <HTMLSelectElement>document.getElementById("fertility");
            if(pregnancy.value == "0") {
                fertility.disabled = false;
            }
            else {
                fertility.disabled = true;
                fertility.selectedIndex = 0;
            }
        }
        
    }
}