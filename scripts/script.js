function encryptText() {
  const inputText = document.getElementById("inputText").value;
  if (inputText.length === 0) {
    alert("Please enter some text to encrypt.");
    return;
  }
  const shift = 3; // Number of positions to shift the characters
  let encryptedText = "";

  for (let i = 0; i < inputText.length; i++) {
    let charCode = inputText.charCodeAt(i);

    // Encrypt uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    // Encrypt lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + shift) % 26) + 97;
    }

    encryptedText += String.fromCharCode(charCode);
  }

  document.getElementById("outputText").innerText = encryptedText;

  let content = document.querySelector(".presentation__output__content");
  content.style.display = "flex";
  content.style.flexDirection = "column";

  // remove the style from the output text  aligned to the center
  const element = document.querySelector(".presentation__output");
  element.style.display = "block";
  document.getElementById("hiddenButton").innerHTML = `
  <button class="presentation__output__hidden__button" onclick="">
          Copy
        </button>
  `;
}

function decryptText() {
  const inputText = document.getElementById("outputText").innerText;
  const inputTextValue = document.getElementById("inputText").value;
  const shift = 3; // Number of positions to shift the characters back
  let decryptedText = "";
  if (inputTextValue.length === 0) {
    alert("Please encrypt some text first.");
    return;
  }

  for (let i = 0; i < inputText.length; i++) {
    let charCode = inputText.charCodeAt(i);

    // Decrypt uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 - shift + 26) % 26) + 65;
    }
    // Decrypt lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 - shift + 26) % 26) + 97;
    }

    decryptedText += String.fromCharCode(charCode);
  }

  document.getElementById("outputText").innerText = decryptedText;
}
