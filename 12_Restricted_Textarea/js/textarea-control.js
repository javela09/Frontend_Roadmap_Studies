//----------------------------------------------//
//              CONTROL DE VARIABLES            //
//----------------------------------------------//

const messageTextArea = document.getElementById("message");
const characterCounter = document.getElementById("characterCounter");

let maxLenght = 250;

//----------------------------------------------//
//              CONTROL DE INICIO               //
//----------------------------------------------//

// Cuenta caracteres cada vez que recibe un input y los asigna al texto.
messageTextArea.addEventListener("input", () => {
    const message = messageTextArea.value;
    const messageLength = message.length;
    characterCounter.textContent = String(messageLength + "/" + maxLenght);

    // Asignar clase error si sobrepasa el límite.
    if(messageLength > maxLenght) {
        messageTextArea.classList.add("error");
        characterCounter.classList.add("textError");
    }
    else {
        messageTextArea.classList.remove("error");
        characterCounter.classList.remove("textError");
    }
});
