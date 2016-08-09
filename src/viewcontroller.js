/**
 * Created by Bartek on 2016-04-03.
 */
var controller;
(function (controller) {
    var ViewController = (function () {
        function ViewController() {
            this.pregnancySelect = document.getElementById("pregnant");
            this.genderSelect = document.getElementById("gender");
            this.genderSelect.addEventListener("change", this.onGenderSelect);
            this.pregnancySelect.addEventListener("change", this.onPregnancySelect);
        }
        ViewController.prototype.onGenderSelect = function (e) {
            var gender = document.getElementById("gender");
            var pregnancy = document.getElementById("pregnant");
            if (gender.value == "0") {
                pregnancy.disabled = false;
            }
            else {
                pregnancy.disabled = true;
                pregnancy.selectedIndex = 0;
            }
        };
        ViewController.prototype.onPregnancySelect = function (e) {
            var pregnancy = document.getElementById("pregnant");
            var fertility = document.getElementById("fertility");
            if (pregnancy.value == "0") {
                fertility.disabled = false;
            }
            else {
                fertility.disabled = true;
                fertility.selectedIndex = 0;
            }
        };
        return ViewController;
    }());
    controller.ViewController = ViewController;
})(controller || (controller = {}));
//# sourceMappingURL=viewcontroller.js.map