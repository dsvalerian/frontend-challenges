function handleClick(event) {
    console.log("clicked");
    radioButtons.forEach(button => {
        button.checked = false;
        button.classList.remove("radio-checked");
        console.log("removing");
    });

    event.target.classList.add("radio-checked");
    let radioElement = event.target.querySelector("input");
    radioElement.checked = true;
}

let radioButtons = document.querySelectorAll(".radio");
radioButtons.forEach(radio => radio.addEventListener("click", handleClick));