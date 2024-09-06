export function toggleMeasurementSystem(
  isMetric,
  weightSt,
  weightLb,
  weightKg,
  heightCm,
  heightFt,
  heightIn
) {
  if (isMetric) {
    weightSt.setAttribute("hidden", true);
    weightLb.setAttribute("hidden", true);
    heightFt.setAttribute("hidden", true);
    heightIn.setAttribute("hidden", true);

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
