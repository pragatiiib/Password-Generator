function generatePassword() {
    const length = document.getElementById("length").value;
    const hasUppercase = document.getElementById("uppercase").checked;
    const hasLowercase = document.getElementById("lowercase").checked;
    const hasNumbers = document.getElementById("numbers").checked;
    const hasSymbols = document.getElementById("symbols").checked;
  
    let charset = "";
  
    if (hasLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (hasUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasNumbers) charset += "0123456789";
    if (hasSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./";
  
    if (charset === "") {
      alert("Please select at least one character type.");
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    document.getElementById("generatedPassword").textContent = password;
  }
  
  function copyPassword() {
    const password = document.getElementById("generatedPassword").textContent;
    navigator.clipboard.writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  }