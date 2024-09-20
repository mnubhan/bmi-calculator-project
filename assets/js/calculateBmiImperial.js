import {emptyInput} from "./emptyInput.js"
import { addAlertMessage } from "./addAlertMessage.js";
import alertInput from "./alertInput.js"
const bmiValueElement = document.querySelector(".bmi__value");
const calculateBmiImperial = (inches,ft,lb,st)=>{
    if((inches.value === "" && ft.value === "" )|| (lb.value === "" && st.value === "")){
        if(lb.value === "" && st.value === ""){
            let weightInputDiv = document.querySelector(".bmi__input-weight");
            addAlertMessage(weightInputDiv);
            [lb,st].forEach((element)=>{alertInput(element)})
        }
        if(inches.value === "" && ft.value === "" ){
            let heightInputDiv = document.querySelector(".bmi__input-height");
            addAlertMessage(heightInputDiv);
            [inches,ft].forEach((element)=>{alertInput(element)})
        }
       
    }
    else{
        let heightIn= inches.value + ft.value * 12;
        let weightLb = (lb.value + st.value * 14)*703;
        let bmiResult = (weightLb / Math.pow(heightIn,2)).toFixed(2);
        emptyInput([inches,ft,lb,st]);
        bmiValueElement.textContent= bmiResult;
    }
}

export {calculateBmiImperial};