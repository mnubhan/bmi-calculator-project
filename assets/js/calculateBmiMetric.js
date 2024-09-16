import { emptyInput } from "./emptyInput.js";
import { addAlertMessage } from "./addAlertMessage.js";
import alertInput from "./alertInput.js";
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
    emptyInput([weight, height]);
    return bmiResult;
  }
};

export { calculateBmiMetric };
