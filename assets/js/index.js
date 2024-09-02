let imperial = document.querySelector("#imperial");
let metric = document.querySelector("#metric");
let weightSt = document.querySelector(".weight__st");
let weightLb = document.querySelector(".weight__lb");
let weightKg = document.querySelector(".weight__kg");
let heightCm = document.querySelector(".height__cm");
let heightFt = document.querySelector(".height__ft");
let heightIn = document.querySelector(".height__in");

function toggleMeasurementSystem(isMetric) {
  if (isMetric) {
    weightSt.setAttribute("hidden",true);
    weightLb.setAttribute("hidden",true);
    heightFt.setAttribute("hidden",true);
    heightIn.setAttribute("hidden",true);

    weightKg.removeAttribute("hidden");
    heightCm.removeAttribute("hidden");
  } else {
    weightSt.removeAttribute("hidden");
    weightLb.removeAttribute("hidden");
    heightFt.removeAttribute("hidden");
    heightIn.removeAttribute("hidden");

    weightKg.setAttribute("hidden", true);
    heightCm.setAttribute("hidden", true);
  }
}

imperial.addEventListener("click", function () {
    toggleMeasurementSystem(false);
  });

metric.addEventListener("click", function () {
    toggleMeasurementSystem(true);
});
