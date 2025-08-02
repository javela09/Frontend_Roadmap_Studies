//----------------------------------------------//
//              CONTROL DE VARIABLES            //
//----------------------------------------------//

const cookiesPopup = document.getElementById("cookies-popup")

const cookiesCloseBtn = document.getElementById("close-cookies");
const cookiesAcceptBtn = document.getElementById("accept-cookies");

//----------------------------------------------//
//              CONTROL DE INICIO               //
//----------------------------------------------//

if (!localStorage.getItem("cookiesAccepted")) {
    cookiesPopup.style.display = "block";
}

//----------------------------------------------//
//              CONTROL DE BOTONES              //
//----------------------------------------------//

cookiesCloseBtn.addEventListener("click", () => {
    cookiesPopup.style.display = "none";
})

cookiesAcceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookiesPopup.style.display = "none";
})

//----------------------------------------------//
//              INICIO DE FUNCIONES             //
//----------------------------------------------//
