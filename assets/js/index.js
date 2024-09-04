import { toggleMeasurementSystem } from "./toggleMeasurementSystem.js";

let imperial = document.querySelector("#imperial");
let metric = document.querySelector("#metric");
let weightSt = document.querySelector(".weight__st");
let weightLb = document.querySelector(".weight__lb");
let weightKg = document.querySelector(".weight__kg");
let heightCm = document.querySelector(".height__cm");
let heightFt = document.querySelector(".height__ft");
let heightIn = document.querySelector(".height__in");
let formBMI = document.querySelector(".form__bmi");

imperial.onclick = () => {
  toggleMeasurementSystem(
    false,
    weightSt,
    weightLb,
    weightKg,
    heightCm,
    heightFt,
    heightIn
  );
};

metric.onclick = () => {
  toggleMeasurementSystem(
    true,
    weightSt,
    weightLb,
    weightKg,
    heightCm,
    heightFt,
    heightIn
  );
};

formBMI.onsubmit = (event) => {
  console.log(weightKg.value);
  console.log(event);
  
}