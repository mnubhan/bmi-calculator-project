import { emptyInput } from "./emptyInput.js";
import { addAlertMessage } from "./addAlertMessage.js";
import alertInput from "./alertInput.js";
const bmiValueElement = document.querySelector(".bmi__value");
const weightHealthyRange = document.querySelector(".weight__healthy-range");
const bmiCalcultorValue = document.querySelector(".bmi__calculator_value");
const bmiCalculatorExplain = document.querySelector(".bmi__calculator_explain");
const bmiCalculatorInfo = document.querySelector(".bmi__calculator_info");
const calculateBmiMetric = (weight, height) => {
  if (weight.value === "" || height.value === "") {
    if (weight.value === "") {
      let weightInputDiv = document.querySelector(".bmi__input-weight");
      addAlertMessage(weightInputDiv);
      alertInput(weight);
    }
    if (height.value === "") {
      let heightInputDiv = document.querySelector(".bmi__input-height");
      addAlertMessage(heightInputDiv);
      alertInput(height);
    }
  } else {
    let bmiResult = (weight.value / Math.pow(height.value / 100, 2)).toFixed(2);
    let minimumIdealWeight = (18.5 * Math.pow(height.value / 100, 2)).toFixed(2);
    let maximumIdealWeight = (24.9 * Math.pow(height.value / 100, 2)).toFixed(2);
    let idealWeightRange = `${minimumIdealWeight}kgs - ${maximumIdealWeight}kgs`;
    bmiValueElement.textContent = bmiResult;
    weightHealthyRange.textContent = idealWeightRange;
    [bmiCalcultorValue,bmiCalculatorExplain].forEach(element=>element.style.setProperty("display","block"));;
    bmiCalculatorInfo.style.setProperty("display","none");
    emptyInput([weight, height]);
  }
};

export { calculateBmiMetric };
