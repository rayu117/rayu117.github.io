function darkFunction() {
    // IMO you can just write this in a single line w/o the variable declaration.
    let element = document.body;
    element.classList.toggle("dark-mode")
}

// Since this function and textAdventureShow do essentially the same thing, they ought to be combined into one function
// You may need to add parameter(s) to the function to make it work in both cases.
// Keep your code DRY!
function snowmanShow() {
    let newInfo = document.createElement("p");
    newInfo.textContent = "The Snowman Game is a guessing game run using node.js. The object of this project was to show mastery in the use of objects.";
    const mySnowShow = document.getElementById("new-Snow-Info")
    mySnowShow.appendChild(newInfo)
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
    textInfo.textContent = "The Luxuey Car Builder is a text-based game run using node.js. The object of this project was to show mastery in the use of functions and control flow.";
    const myTextShow = document.getElementById("new-Text-Info")
    myTextShow.appendChild(textInfo)
}
