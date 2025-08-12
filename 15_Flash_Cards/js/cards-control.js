//----------------------------------------------//
//                    TARJETAS                  //
//----------------------------------------------//

const cards = [
    { q: "What does HTML stand for?", a: "HyperText Markup Language." },
    { q: "What is HTML used for?", a: "A markup language for structuring web content." },
    { q: "What does CSS stand for?", a: "Cascading Style Sheets." },
    { q: "What is the purpose of CSS?", a: "To style and layout web pages." },
    { q: "What does JavaScript primarily do in web development?", a: "Adds interactivity and dynamic behavior to web pages." },
    { q: "What is the DOM in web development?", a: "Document Object Model, a tree structure representing the web page." },
    { q: "What is the role of a web server?", a: "To store, process, and deliver web pages to clients." },
    { q: "What does HTTP stand for?", a: "Hypertext Transfer Protocol." },
    { q: "What is an API?", a: "An Application Programming Interface for communication between software components." },
    { q: "What is responsive web design?", a: "Designing web pages to look good on all devices and screen sizes." },
    { q: "What is the difference between 'id' and 'class' in HTML?", a: "'id' is unique for one element, 'class' can be reused for multiple elements." },
    { q: "What is a CSS selector?", a: "A pattern used to target and style specific HTML elements." },
    { q: "What is the difference between inline, internal, and external CSS?", a: "Inline styles are in the element, internal CSS is in a <style> tag, external CSS is in a separate file." },
    { q: "What is AJAX used for?", a: "To send and receive data asynchronously without reloading the page." },
    { q: "What does the <meta> tag do in HTML?", a: "Provides metadata about the HTML document." },
    { q: "What is semantic HTML?", a: "HTML that conveys meaning and structure, like <article> or <header>." },
    { q: "What is the difference between GET and POST in HTTP?", a: "GET retrieves data, POST sends data to the server." },
    { q: "What is a JavaScript event listener?", a: "A function that waits for and responds to specific user actions." },
    { q: "What is the difference between localStorage and sessionStorage?", a: "localStorage stores data with no expiration, sessionStorage lasts until the tab is closed." },
    { q: "What is a CDN?", a: "Content Delivery Network, used to deliver resources quickly from servers near the user." },
]

//----------------------------------------------//
//                     ESTADO                   //
//----------------------------------------------//

let index = 0;

//----------------------------------------------//
//                       DOM                    //
//----------------------------------------------//

const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const questNumber = document.getElementById("questNumber");

const prevBtn = document.getElementById("prevBtn");
const showHideBtn = document.getElementById("showHideBtn");
const nextBtn = document.getElementById("nextBtn");

const questionBox = document.querySelector(".question");
const answerBox = document.querySelector(".answer");
const answer = document.getElementById("answer");
const question = document.getElementById("question");

//----------------------------------------------//
//                     RENDER                   //
//----------------------------------------------//

function render() {
    const total = cards.length;

    if (index >= total) {
        question.textContent = "Completed!";
        answer.textContent = "";
        progress.value = 100;
        percent.textContent = "100%";
    }

    else {
        const currentQuest = index + 1;

        answer.textContent = cards[index].a;
        question.textContent = cards[index].q;

        const calcPercent = Math.round(((currentQuest-1) / total)*100);
        progress.value = calcPercent;
        percent.textContent = `${calcPercent}%`;
        questNumber.textContent = `${currentQuest}/${total}`;
    }
}

//----------------------------------------------//
//                    EVENTOS                   //
//----------------------------------------------//

showHideBtn.addEventListener("click", () => {
    answerBox.classList.toggle("active");
    answerBox.classList.contains("active") ? answerBox.classList.remove("hidden") : answerBox.classList.add("hidden");
    answerBox.classList.contains("active") ? questionBox.classList.add("hidden") : questionBox.classList.remove("hidden");
})

prevBtn.addEventListener("click", () => {
    index--;
    answerBox.classList.add("hidden");
    answerBox.classList.remove("active");
    questionBox.classList.remove("hidden");
    render();
})

nextBtn.addEventListener("click", () => {
    index++;
    answerBox.classList.add("hidden");
    answerBox.classList.remove("active");
    questionBox.classList.remove("hidden");
    render();
})

//----------------------------------------------//
//                    INICIO                    //
//----------------------------------------------//

render();