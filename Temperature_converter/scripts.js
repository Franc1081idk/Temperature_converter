let text = document.getElementById("text");
const option1 = document.getElementById("c_f");
const option2 = document.getElementById("f_c");
let result = document.getElementById("result");

function conversion() {
  let temperature = Number(text.value);

  if (option1.checked) {
    temperature = (temperature * 9) / 5 + 32;
    result.textContent = temperature + "°F";
  } else if (option2.checked) {
    temperature = ((temperature - 32) * 5) / 9;
    result.textContent = temperature + "°C";
  } else {
    result.textContent = "Please select an option";
  }
}
