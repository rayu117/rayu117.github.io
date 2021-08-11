function darkFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function snowmanShow() {
  let newInfo = document.createElement("p");
  newInfo.textContent =
    "The Snowman Game is a guessing game run using node.js. The object of this project was to show mastery in the use of objects.";
  const mySnowShow = document.getElementById("new-Snow-Info");
  mySnowShow.appendChild(newInfo);
}

// document.addEventListener("DOMContentLoaded", () =>{
//     let test = document.getElementById("test");
//     test.addEventListener("mouseover", () =>{
//         // let adventure = document.createElement("")
//         let newInfo = document.createElement("p");
//     newInfo.textContent = "The Snowman Game objective of this project was to manipulate objects.";
//     const myShow = document.getElementById("new-Info")
//     myShow.appendChild(newInfo)

//     })
// })

function textAdventureShow() {
  let textInfo = document.createElement("p");
  textInfo.textContent =
    "The Luxuey Car Builder is a text-based game run using node.js. The object of this project was to show mastery in the use of functions and control flow.";
  const myTextShow = document.getElementById("new-Text-Info");
  myTextShow.appendChild(textInfo);
}

// function showProject(project) {
//     let project = document.createElement("p");
//     if (project === textAdv) {
//         project.textContent = "The Luxuey Car Builder is a text-based game run using node.js. The object of this project was to show mastery in the use of functions and control flow.";
//     } else {
//         project.textContent = "The Snowman Game is a guessing game run using node.js. The object of this project was to show mastery in the use of objects.";
//     }
//     const myTextShow = document.getElementById("new-project-info")
//     myTextShow.appendChild(project)

// }
