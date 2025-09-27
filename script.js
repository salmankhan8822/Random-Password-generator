let passBox = document.getElementById("passBox");
let copyIcon = document.getElementById("copyIcon");
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");


sliderValue.textContent = inputSlider.value;


inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});


genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});


let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "123456789";
let symbolChars = "@#$%^&*()?><";


function generatePassword() {
  let allChars = "";
  let newPassword = "";

  if (numbers.checked) {
    allChars += numberChars;
  }

  if (lowercase.checked) {
    allChars += lowercase;
  }

  if (symbols.checked) {
    allChars += symbolChars;
  }

  if (uppercase.checked) {
    allChars += upperChars;
  }

  if (allChars.length === 0) {
    return alert("please select at least one option")
  }

  for (let i = 0; i < inputSlider.value; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    newPassword += allChars[randomIndex];
  }

  return newPassword;
}


copyIcon.addEventListener("click", () => {
  if(passBox.value.length > 0) {
    navigator.clipboard.write(passBox.value);
    copyIcon.textContent = "copied";
    copyIcon.title = "copy";
  }

  setTimeout(() => {
    copyIcon.textContent = "copy";
    copyIcon.title = "";
  }, 2000);
});