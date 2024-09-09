import { toggleMeasurementSystem } from "./toggleMeasurementSystem.js";

let imperial = document.querySelector("#imperial");
let metric = document.querySelector("#metric");
let weightStInput = document.getElementById("weight__st");
let weightLbInput = document.getElementById("weight__lb");
let weightKgInput = document.getElementById("weight__kg");
let heightCmInput = document.getElementById("height__cm");
let heightFtInput = document.getElementById("height__ft");
let heightInInput = document.getElementById("height__in");
let formBMI = document.querySelector(".form__bmi");
const inputElements = document.querySelectorAll("input");
const measurementTypeList = [imperial,metric];

measurementTypeList.forEach(measurement=>{
  measurement.onclick = () => {
    toggleMeasurementSystem(measurement.id);
  }
})

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
