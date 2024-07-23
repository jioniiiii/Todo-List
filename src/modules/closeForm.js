export function closeForm(callback) {
    const container = document.querySelector('.container');
    const contForm = document.querySelector('.contForm');
    if (container && contForm) {
        container.removeChild(contForm);
    }
    if (callback) {
        callback();
    }
}