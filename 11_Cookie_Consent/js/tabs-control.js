//----------------------------------------------//
//              CONTROL DE VARIABLES            //
//----------------------------------------------//

const tab1 = document.getElementById("first-tab");
const tab2 = document.getElementById("second-tab");
const tab3 = document.getElementById("third-tab");
const tab4 = document.getElementById("fourth-tab");

const button1 = document.getElementById("first-btn");
const button2 = document.getElementById("second-btn");
const button3 = document.getElementById("third-btn");
const button4 = document.getElementById("fourth-btn");

//----------------------------------------------//
//              CONTROL DE INICIO               //
//----------------------------------------------//

function start() {
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");

    tab1.style.display = "grid";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
}

//----------------------------------------------//
//              CONTROL DE BOTONES              //
//----------------------------------------------//

button1.addEventListener("click", () => {
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");

    tab1.style.display = "grid";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
})

button2.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
    button4.classList.remove("active");

    tab1.style.display = "none";
    tab2.style.display = "grid";
    tab3.style.display = "none";
    tab4.style.display = "none";
})

button3.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
    button4.classList.remove("active");

    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "grid";
    tab4.style.display = "none";
})

button4.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.add("active");

    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "grid";
})

//----------------------------------------------//
//              INICIO DE FUNCIONES             //
//----------------------------------------------//

start();