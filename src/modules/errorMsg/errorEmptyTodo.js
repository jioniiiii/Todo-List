export function showError(errorMessage){
    let container = document.querySelector(".container");//rember to style the z index 

    //close button for error msg
    const button = document.createElement('button');
    button.textContent = 'X';
    button.addEventListener("click", function() {
        container.removeChild(errorCont);
    });

    //container for error msg
    const errorCont = document.createElement('div');
    errorCont.classList.add('errorEmpty');

    const errorMsg = document.createElement('p');
    errorMsg.textContent = errorMessage;

    errorCont.appendChild(button);
    errorCont.appendChild(errorMsg);
    container.appendChild(errorCont);

}


   