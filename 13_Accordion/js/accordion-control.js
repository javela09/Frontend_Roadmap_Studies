//----------------------------------------------//
//              CONTROL DE VARIABLES            //
//----------------------------------------------//

const whatIsBtn = document.getElementById("whatIsBtn");
const plansBtn = document.getElementById("plansBtn");
const howIsBuiltBtn = document.getElementById("howIsBuiltBtn");
const canMyTeamBtn = document.getElementById("canMyTeamBtn");
const customRoadmapsBtn = document.getElementById("customRoadmapsBtn");
const projectGitHubBtn = document.getElementById("projectGitHubBtn");

const whatIsAnswer = document.getElementById("whatIsAnswer");
const plansAnswer = document.getElementById("plansAnswer");
const howIsBuiltAnswer = document.getElementById("howIsBuiltAnswer");
const canMyTeamAnswer = document.getElementById("canMyTeamAnswer");
const customRoadmapsAnswer = document.getElementById("customRoadmapsAnswer");
const projectGitHub = document.getElementById("projectGitHub");

//----------------------------------------------//
//              CONTROL DE INICIO               //
//----------------------------------------------//

function start() {
    whatIsBtn.classList.remove("active");
    plansBtn.classList.remove("active");
    howIsBuiltBtn.classList.remove("active");
    canMyTeamBtn.classList.remove("active");
    customRoadmapsBtn.classList.remove("active");
    projectGitHubBtn.classList.remove("active");

    whatIsAnswer.classList.add("hidden")
    plansAnswer.classList.add("hidden")
    howIsBuiltAnswer.classList.add("hidden");
    canMyTeamAnswer.classList.add("hidden");
    customRoadmapsAnswer.classList.add("hidden");
    projectGitHub.classList.add("hidden");
}

//----------------------------------------------//
//              CONTROL DE BOTONES              //
//----------------------------------------------//

whatIsBtn.addEventListener("click", () => {
    whatIsBtn.classList.toggle("active");
        whatIsBtn.classList.contains("active") ? whatIsAnswer.classList.remove("hidden") : whatIsAnswer.classList.add("hidden");
})

plansBtn.addEventListener("click", () => {
    plansBtn.classList.toggle("active");
        plansBtn.classList.contains("active") ? plansAnswer.classList.remove("hidden") : plansAnswer.classList.add("hidden");
})

howIsBuiltBtn.addEventListener("click", () => {
    howIsBuiltBtn.classList.toggle("active");
        howIsBuiltBtn.classList.contains("active") ? howIsBuiltAnswer.classList.remove("hidden") : howIsBuiltAnswer.classList.add("hidden");
})

canMyTeamBtn.addEventListener("click", () => {
    canMyTeamBtn.classList.toggle("active");
        canMyTeamBtn.classList.contains("active") ? canMyTeamAnswer.classList.remove("hidden") : canMyTeamAnswer.classList.add("hidden");
})

customRoadmapsBtn.addEventListener("click", () => {
    customRoadmapsBtn.classList.toggle("active");
        customRoadmapsBtn.classList.contains("active") ? customRoadmapsAnswer.classList.remove("hidden") : customRoadmapsAnswer.classList.add("hidden");
})

projectGitHubBtn.addEventListener("click", () => {
    projectGitHubBtn.classList.toggle("active");
        projectGitHubBtn.classList.contains("active") ? projectGitHub.classList.remove("hidden") : projectGitHub.classList.add("hidden");
})

//----------------------------------------------//
//              INICIO DE FUNCIONES             //
//----------------------------------------------//

start();