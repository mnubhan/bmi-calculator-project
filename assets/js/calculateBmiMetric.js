import { emptyInput } from "./emptyInput.js";
import { alertUnfilledField } from "./alertUnfilledField.js";
const calculateBmiMetric = (weight, height) => {
  console.log("weight", weight);
  console.log("height", height);
  if (weight.value === "" || height.value === "") {
    if (weight.value === "") {
      alertUnfilledField(weight);
    }

    if (height.value === "") {
      alertUnfilledField(height);
    }
  } else {
    console.log((weight.value / Math.pow(height.value / 100, 2)).toFixed(2));
    emptyInput([weight, height]);
  }
};

export { calculateBmiMetric };
