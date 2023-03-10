import { Modal } from "./Module.js"
import { AlertError } from "./Alert-error.js"
const form = document.querySelector('form');
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

function notNumber(value) {
  return isNaN(value) || value === ""
}

form.onsubmit = (e) => {
  e.preventDefault();
  const weight = inputWeight.value
  const height = inputHeight.value
  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    AlertError.open()
    return;
  }
  AlertError.close();


  const result = IMC(weight, height)
  const message = `your BMI is ${result}`
  Modal.message.innerText = message
  Modal.open();

}


