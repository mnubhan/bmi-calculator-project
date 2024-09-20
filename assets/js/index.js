import { toggleMeasurementSystem } from "./toggleMeasurementSystem.js";
import { calculateBmiMetric } from "./calculateBmiMetric.js";
import { calculateBmiImperial } from "./calculateBmiImperial.js";
import removeAlertMessage from "./removeAlertMessage.js";
import removeAlertInput from "./removeAlertInput.js"
let imperial = document.querySelector("#imperial");
let metric = document.querySelector("#metric");
let weightStInput = document.getElementById("weight__st");
let weightLbInput = document.getElementById("weight__lb");
let weightKgInput = document.getElementById("weight__kg");
let heightCmInput = document.getElementById("height__cm");
let heightFtInput = document.getElementById("height__ft");
let heightInInput = document.getElementById("height__in");
const inputElements = document.querySelectorAll("input");
const measurementTypeList = [imperial, metric];

measurementTypeList.forEach((measurement) => {
  measurement.onclick = () => {
    toggleMeasurementSystem(measurement.id);
  };
});

inputElements.forEach((input) => {
  input.onkeyup = (event) => {
    if (event.key.toLowerCase() === "enter") {
      if (metric.checked) {
        calculateBmiMetric(weightKgInput, heightCmInput);
      } else if (imperial.checked) {
        calculateBmiImperial(
          heightInInput,
          heightFtInput,
          weightLbInput,
          weightStInput
        );
      }
    }
    if (!isNaN(parseInt(event.key))) {
      if(event.target.parentNode.parentNode.classList.contains("bmi__input-height")){
        [heightCmInput,heightFtInput,heightInInput].forEach((element)=>{removeAlertInput(element)});
      }
      if(event.target.parentNode.parentNode.classList.contains("bmi__input-weight")){
        [weightKgInput,weightStInput,weightLbInput].forEach((element)=>{removeAlertInput(element)});
      }
      removeAlertMessage(event.target);
    }
  };
});
