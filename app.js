function getPin() {
   const pin = generatePin();
   const pinString = pin + "";
   if (pinString.length === 4) {
      return pin
   } else {
      return getPin();
   }
}

function generatePin() {
   const random = Math.round(Math.random() * 10000);
   return random;
}

document.getElementById("generate-btn").addEventListener("click", function () {
   const setPin = document.getElementById("set-pin");
   const pin = getPin();
   setPin.value = pin;
});
document.getElementById("calculator").addEventListener("click", function (event) {
   const number = event.target.innerText;
   const typePinField = document.getElementById("type-pin");
   const typePinFieldValue = typePinField.value;
   if (isNaN(number)) {
      if (number === "C") {
         typePinField.value = ""
      } else if (number === "<") {
         const digits = typePinFieldValue.split("");
         digits.pop();
         const remainDigits = digits.join("");
         typePinField.value = remainDigits;
      }
   } else {
      const newTypePinField = typePinFieldValue + number;
      typePinField.value = newTypePinField;
   }
});
document.getElementById("submit-btn").addEventListener("click", function () {
   const setPin = document.getElementById("set-pin").value;
   const typePinField = document.getElementById("type-pin").value;

   const pinWrong = document.getElementById("pin-wrong");
   const pinSuccess = document.getElementById("pin-success");

   if (setPin === typePinField) {
      pinSuccess.style.display = "block";
      pinWrong.style.display = "none";
   } else {
      pinWrong.style.display = "block";
      pinSuccess.style.display = "none";
   }

})