//----------------------------------------------//
//                   VARIABLES                  //
//----------------------------------------------//

const dropdownBtn = document.getElementById("dropdownBtn");
const placeholder = document.getElementById("placeholder");
const dropdownItemContainer = document.getElementById("dropdownItemContainer");
const items = document.querySelectorAll(".item");

//----------------------------------------------//
//                     ESTADO                   //
//----------------------------------------------//

placeholder.textContent = "Select an item";

//----------------------------------------------//
//                   FUNCIONES                  //
//----------------------------------------------//



//----------------------------------------------//
//                    EVENTOS                   //
//----------------------------------------------//

dropdownBtn.addEventListener("click", () => {
    dropdownItemContainer.classList.toggle("close");
    dropdownBtn.classList.toggle("open");
})

items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => {
            i.classList.remove("clicked");
        })

        item.classList.toggle("clicked");

        if(item.classList.contains("clicked")){
            placeholder.textContent = item.textContent;
        }
        else {
            placeholder.textContent = "Select an item";
        }
    })
})

//----------------------------------------------//
//                    INICIO                    //
//----------------------------------------------//
