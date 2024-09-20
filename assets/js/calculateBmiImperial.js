import { emptyInput } from "./emptyInput.js";
import { addAlertMessage } from "./addAlertMessage.js";
import alertInput from "./alertInput.js";
const bmiValueElement = document.querySelector(".bmi__value");
const weightHealthyRange = document.querySelector(".weight__healthy-range");
const bmiCalcultorValue = document.querySelector(".bmi__calculator_value");
const bmiCalculatorExplain = document.querySelector(".bmi__calculator_explain");
const bmiCalculatorInfo = document.querySelector(".bmi__calculator_info");
const calculateBmiImperial = (inches, ft, lb, st) => {
  if (
    (inches.value === "" && ft.value === "") ||
    (lb.value === "" && st.value === "")
  ) {
    if (lb.value === "" && st.value === "") {
      let weightInputDiv = document.querySelector(".bmi__input-weight");
      addAlertMessage(weightInputDiv);
      [lb, st].forEach((element) => {
        alertInput(element);
      });
    }
    if (inches.value === "" && ft.value === "") {
      let heightInputDiv = document.querySelector(".bmi__input-height");
      addAlertMessage(heightInputDiv);
      [inches, ft].forEach((element) => {
        alertInput(element);
      });
    }
  } else {
    let heightIn = parseInt(inches.value) + ft.value * 12;
    let weightLb = parseInt(lb.value) + parseInt(st.value) * 14;
    let bmiResult = ((weightLb / Math.pow(heightIn, 2)) * 703).toFixed(2);
    console.log("height In", inches.value);
    console.log("height Ft", ft.value * 12);
    console.log("weight Lb", weightLb);
    console.log("height In", heightIn);
    let minimumIdealWeight = ((18.5 * Math.pow(heightIn, 2)) / 703).toFixed(2);
    let maximumIdealWeight = ((24.9 * Math.pow(heightIn, 2)) / 703).toFixed(2);
    let minimumIdealWeightSt = Math.floor(minimumIdealWeight / 14);
    let minimumIdealWeightLb = Math.floor(
      (minimumIdealWeight / 14 - Math.floor(minimumIdealWeight / 14)) * 14
    );
    let maximumIdealWeightSt = Math.floor(maximumIdealWeight / 14);
    let maximumIdealWeightLb = Math.floor(
      (maximumIdealWeight / 14 - Math.floor(maximumIdealWeight / 14)) * 14
    );
    let idealWeightRange = `${minimumIdealWeightSt}st ${minimumIdealWeightLb}lb - ${maximumIdealWeightSt}st ${maximumIdealWeightLb}lb`;
    bmiValueElement.textContent = bmiResult;
    weightHealthyRange.textContent = idealWeightRange;
    bmiCalcultorValue.removeAttribute("hidden");
    bmiCalculatorExplain.removeAttribute("hidden");
    bmiCalculatorInfo.setAttribute("hidden",true);
    emptyInput([inches, ft, lb, st]);
  }
};

export { calculateBmiImperial };
