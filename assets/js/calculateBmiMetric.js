import { emptyInput } from "./emptyInput.js";
const calculateBmiMetric = (weight, height,) => {
    console.log("weight",weight);
    console.log("height",height);
    if (weight.value === "" || height.value === ""){
        return "Weight Or Height is not fill";
    }
    else{
        console.log((weight.value / Math.pow(height.value/100,2)).toFixed(2));
        emptyInput([weight, height]);
    }
}

export { calculateBmiMetric };