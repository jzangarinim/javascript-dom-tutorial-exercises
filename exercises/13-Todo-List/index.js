// Your code here
let addButton = document.getElementById("addToDo");
let ul = document.querySelector("ul");
let span = `<span><i class="fa fa-trash"></i></span> `
let trash = document.getElementsByClassName("fa-trash");

console.log(trash);

ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-trash")) {
        event.target.parentNode.parentNode.remove();
    }
})
/* trash.addEventListener("click", (event) => {
    alert('hi')
}) */

addButton.addEventListener("keydown", (event) => {
    if (event.target.value && event.key == 'Enter') {
        let li = document.createElement("li");
        let firstLetter = event.target.value.charAt(0);
        let remainingCharacters = event.target.value.slice(1);
        let capitalizedWord = firstLetter.toUpperCase() + remainingCharacters.toLowerCase();
        li.innerHTML = span + capitalizedWord;
        // li.innerHTML = span + event.target.value;
        ul.appendChild(li);
    }
})