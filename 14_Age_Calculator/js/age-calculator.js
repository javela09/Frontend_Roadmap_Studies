//----------------------------------------------//
//              CONTROL DE VARIABLES            //
//----------------------------------------------//

let today = new Date();
const calculateBtn = document.getElementById("calculateBtn");

//----------------------------------------------//
//              CONTROL DE INICIO               //
//----------------------------------------------//



//----------------------------------------------//
//              CONTROL DE BOTONES              //
//----------------------------------------------//

calculateBtn.addEventListener("click", () => {
    let birthdate = document.getElementById("birthdate").value;
    let birth = new Date(birthdate);
    if (!birthdate) {
        document.querySelector(".age").textContent = "";
        return;
    }
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if(months < 0) {
        years--;
        months += 12;
    }

    document.querySelector(".age").textContent = `You are ${years} years and ${months} months old`;

    console.log(years);
    console.log(months);
})

//----------------------------------------------//
//              INICIO DE FUNCIONES             //
//----------------------------------------------//

