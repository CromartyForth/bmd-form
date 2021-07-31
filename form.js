console.log("Hiya");
const changeMe = document.querySelector("#change-me");
const changeButton = document.querySelector("#changeButton");
changeButton.addEventListener("click", handleClick);

function handleClick(event){
    changeMe.innerText = "Button Clicked"
    console.log(event);
}