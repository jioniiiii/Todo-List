import formtest from "./form";
const todoBtn = function() {


    let container = document.querySelector(".container");



    if (!container) {
        console.error("Container not found");
        return;
    }

    const main = document.createElement("div");
    main.id = "main";
    container.appendChild(main);

    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "factory test";
    main.appendChild(button);

    button.addEventListener("click", function() {
        formtest();
    });

    return main;
}

export default todoBtn;
