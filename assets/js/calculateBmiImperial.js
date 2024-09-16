import {emptyInput} from "./emptyInput.js"
import { alertUnfilledField } from "./alertUnfilledField.js";

const calculateBmiImperial = (inches,ft,lb,st)=>{
    if((inches.value === "" && ft.value === "" )|| (lb.value === "" && st.value === "")){
        if(inches.value === "" && ft.value === "" ){
            alertUnfilledField(inches);
        }
        if(lb.value === "" && st.value === ""){
            alertUnfilledField(st);
        }
    }
    else{
        let heightIn= inches.value + ft.value * 12;
        let weightLb = (lb.value + st.value * 14)*703;
        let bmiResult = (weightLb / Math.pow(heightIn,2)).toFixed(2);
        emptyInput([inches,ft,lb,st]);
        return bmiResult;
    }
}

export {calculateBmiImperial};