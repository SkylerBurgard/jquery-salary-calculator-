$(document).ready(init);

let operation = "";

function init() {
  $("#js-btn-add").on("click", clickAdd);
  $("#js-btn-subtract").on("click", clickSubtract);
  $("#js-btn-multiply").on("click", clickMultiply);
  $("#js-btn-divide").on("click", clickDivide);
  $("#js-btn-equals").on("click", clickEquals);
  $("#js-btn-clear").on("click", clickClear);

  getEquations();
}
