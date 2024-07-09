function processText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = "";
    let warningMessage = document.getElementById("warningMessage");

    if (!validateText(inputText)) {
        warningMessage.style.visibility = "visible";
        outputText = "Error: El texto contiene mayúsculas o caracteres especiales.";
    } else {
        warningMessage.style.visibility = "hidden";
        if (document.getElementById("outputText").dataset.mode === "encrypt") {
            outputText = btoa(inputText); // Encriptación básica con Base64
        } else if (document.getElementById("outputText").dataset.mode === "decrypt") {
            try {
                outputText = atob(inputText); // Desencriptación básica con Base64
            } catch (e) {
                outputText = "Error: El texto no es válido para desencriptar.";
            }
        }
    }

    document.getElementById("outputText").value = outputText;
}

function validateText(text) {
    const regex = /^[a-z0-9\s]+$/; // Solo minúsculas, números y espacios
    return regex.test(text);
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;
    if (!validateText(inputText)) {
        document.getElementById("warningMessage").style.visibility = "visible";
        document.getElementById("outputText").value = "Error: El texto contiene mayúsculas o caracteres especiales.";
    } else {
        document.getElementById("warningMessage").style.visibility = "hidden";
        let outputText = btoa(inputText); // Encriptación básica con Base64
        document.getElementById("outputText").value = outputText;
        document.getElementById("outputText").dataset.mode = "encrypt";
    }
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    if (!validateText(inputText)) {
        document.getElementById("warningMessage").style.visibility = "visible";
        document.getElementById("outputText").value = "Error: El texto contiene mayúsculas o caracteres especiales.";
    } else {
        document.getElementById("warningMessage").style.visibility = "hidden";
        let outputText = "";
        try {
            outputText = atob(inputText); // Desencriptación básica con Base64
        } catch (e) {
            outputText = "Error: El texto no es válido para desencriptar.";
        }
        document.getElementById("outputText").value = outputText;
        document.getElementById("outputText").dataset.mode = "decrypt";
    }
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
    document.getElementById("warningMessage").style.visibility = "hidden";
    delete document.getElementById("outputText").dataset.mode;
}
