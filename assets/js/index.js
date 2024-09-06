import { toggleMeasurementSystem } from "./toggleMeasurementSystem.js";

let imperial = document.querySelector("#imperial");
let metric = document.querySelector("#metric");
let weightSt = document.querySelector(".weight__st");
let weightLb = document.querySelector(".weight__lb");
let weightKg = document.querySelector(".weight__kg");
let heightCm = document.querySelector(".height__cm");
let heightFt = document.querySelector(".height__ft");
let heightIn = document.querySelector(".height__in");
let weightStInput = document.getElementById("weight__st");
let weightLbInput = document.getElementById("weight__lb");
let weightKgInput = document.getElementById("weight__kg");
let heightCmInput = document.getElementById("height__cm");
let heightFtInput = document.getElementById("height__ft");
let heightInInput = document.getElementById("height__in");
let formBMI = document.querySelector(".form__bmi");
const inputElements = document.querySelectorAll("input");

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

inputElements.forEach(input=>{
  input.onkeyup = event => {
    if (event.key.toLowerCase()==="enter"){
      if(metric.checked){
        console.log("kg",weightKgInput.value);
        console.log("cm",heightCmInput.value);
      }
      else if(imperial.checked){
        console.log("st",weightStInput.value);
        console.log("lb",weightLbInput.value);
        console.log("ft",heightFtInput.value);
        console.log("in",heightInInput.value);
      }
    }
  }
})

// weightKg.onkeyup = (event) => {
//   if (event.key.toLowerCase() === "enter") {
//     console.log(weightKgInput.value);
//     console.log(heightCmInput.value);
//   }
// }