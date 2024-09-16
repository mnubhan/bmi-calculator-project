import { emptyInput } from "./emptyInput.js";
import { alertUnfilledField } from "./alertUnfilledField.js";
const calculateBmiMetric = (weight, height) => {
  if (weight.value === "" || height.value === "") {
    if (weight.value === "") {
      alertUnfilledField(weight);
    }

    if (height.value === "") {
      alertUnfilledField(height);
    }
  } else {
    let bmiResult = (weight.value / Math.pow(height.value /100,2)).toFixed(2);
    emptyInput([weight, height]);
    return bmiResult;
    
  }
};

export { calculateBmiMetric };
