import formtest from "./form";
const todoBtn = function() {

    let clicked = false

    let container = document.querySelector(".container");

    const main = document.createElement("div");
    main.id = "main";
    container.appendChild(main);

    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "Add Todo";
    main.appendChild(button);

    button.addEventListener("click", function() {
        if(clicked) {
            return;
        } else {
            clicked = true;
            formtest(() => {
                clicked = false;
            });
        }
    });

    return main;
}

export default todoBtn;
