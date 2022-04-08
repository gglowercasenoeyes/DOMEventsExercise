const button1 = document.getElementById(`one`);
button1.onclick = function () {
    alert("You clicked the first button! Congrats!")
};
const h3 = document.querySelector(`h3`);
h3.addEventListener(`mouseover`, function (){
    alert("You hovered over the h3 element block! Congrats!")
});
const form = document.querySelector(`form`);
form.addEventListener(`submit` , function (){
    const textInput = form.elements.entry.value;
    alert(`${textInput}`);
});

// BONUS

const darkMode = document.getElementById(`dm`);
darkMode.addEventListener(`click`, function (){
    body.classList.toggle(`dark-mode`);
});