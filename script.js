const passBox = document.getElementById("passBox");
const copyIcon = document.getElementById("copyIcon");
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const genBtn = document.getElementById("genBtn");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "@#$%^&*()?><";

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  const password = generatePassword();

  if (password) {
    passBox.value = password;
  }
});

function generatePassword() {
  let allChars = "";
  let password = "";

  if (lowercase.checked) {
    allChars += lowerChars;
  }

  if (uppercase.checked) {
    allChars += upperChars;
  }

  if (numbers.checked) {
    allChars += numberChars;
  }

  if (symbols.checked) {
    allChars += symbolChars;
  }

  if (allChars.length === 0) {
    alert("Please select at least one password option.");
    return "";
  }

  const length = Number(inputSlider.value);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);

    password += allChars[randomIndex];
  }

  return password;
}

copyIcon.addEventListener("click", async () => {
  if (!passBox.value) {
    return;
  }

  try {
    await navigator.clipboard.writeText(passBox.value);

    copyIcon.textContent = "✓";

    copyIcon.title = "Copied!";

    setTimeout(() => {
      copyIcon.textContent = "📋";
      copyIcon.title = "Copy password";
    }, 2000);
  } catch (error) {
    alert("Unable to copy password.");
  }
});
