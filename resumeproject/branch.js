function generatePassword() {
  const length = document.getElementById('length').value;
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumber = document.getElementById('numbers').checked;
  const useSymbol = document.getElementById('symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+[]{}<>?/|";

  let allChars = "";
  if (useUpper) allChars += upper;
  if (useLower) allChars += lower;
  if (useNumber) allChars += number;
  if (useSymbol) allChars += symbol;

  if (allChars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.select();
  document.execCommand('copy');
  alert("Password copied to clipboard!");
}
