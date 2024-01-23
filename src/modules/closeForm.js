export function closeForm() {
    const container = document.querySelector(".container");
    const contForm = document.querySelector(".contForm");
    container.removeChild(contForm);
}