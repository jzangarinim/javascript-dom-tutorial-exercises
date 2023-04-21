let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let select = document.getElementById("mySelect");
let option;
for (let i = 0; i < countries.length; i++) {
    option = document.createElement("option");
    option.innerHTML = countries[i];
    option.value = countries[i];
    select.appendChild(option);
}

select.addEventListener("change", (event) => {
    //alert("text");
    console.log(event.target.value);
    alert(event.target.value);
})