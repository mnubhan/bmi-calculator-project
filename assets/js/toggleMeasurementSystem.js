import removeAlertInput from "./removeAlertInput.js";
import removeAlertMessage from "./removeAlertMessage.js";

export function toggleMeasurementSystem(typeMeasurement) {
  let weightSt = document.querySelector(".weight__st");
  let weightLb = document.querySelector(".weight__lb");
  let weightKg = document.querySelector(".weight__kg");
  let heightCm = document.querySelector(".height__cm");
  let heightFt = document.querySelector(".height__ft");
  let heightIn = document.querySelector(".height__in");
  let imperialParams = [heightFt, heightIn, weightSt, weightLb];
  let metricParams = [weightKg, heightCm];
  if (typeMeasurement === "metric") {
    imperialParams.forEach((element) => {
      element.style.setProperty("display", "none");
    });
    metricParams.forEach((element) => {
      element.style.setProperty("display", "block");
    });
  } else {
    imperialParams.forEach((element) => {
      element.style.setProperty("display", "inline-block");
    });
    metricParams.forEach((element) => {
      element.style.setProperty("display", "none");
    });
    metricParams.concat(imperialParams).forEach((element) => {
      element.children[0].value = "";
      removeAlertInput(element.children[0]);
      removeAlertMessage(element.children[0]);
    });
  }
}
