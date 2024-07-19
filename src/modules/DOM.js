import { tempStorage , todo} from "./factory";
import formtest from "./form";

export function display(index){

    const todoItem = tempStorage[index];

    const container = document.querySelector(".container");
    
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const todoTitle = document.createElement("p");
    todoTitle.textContent = ` "${todoItem.todoName}" `;
    cardDiv.appendChild(todoTitle);

    const todoDate = document.createElement("p");
    todoDate.textContent = `${todoItem.dueDate} `;
    cardDiv.appendChild(todoDate);

    const todoPriority = document.createElement("p");
    todoPriority.textContent = ` "${todoItem.priority}" `;
    cardDiv.appendChild(todoPriority);

    const todoNotes = document.createElement("p");
    todoNotes.textContent = `${todoItem.notes}`;
    cardDiv.appendChild(todoNotes);

    const buttonDel = document.createElement('button');//del todo button
    buttonDel.textContent = 'DELETE';
    buttonDel.addEventListener("click", function() {
        container.removeChild(cardDiv);
    });

    const buttonDet = document.createElement('button');//detail button
    buttonDet.textContent = 'DETAILS';
    buttonDet.addEventListener("click", function() {
        showDetails(todoItem);
    });

    const buttonEdit = document.createElement('button');//detail button
    buttonEdit.textContent = 'EDIT';
    buttonEdit.addEventListener("click", function() {
        editTodo(todoItem);
    });

    cardDiv.appendChild(buttonEdit);
    cardDiv.appendChild(buttonDet);
    cardDiv.appendChild(buttonDel);
    container.appendChild(cardDiv);

}
//for displaying details
function showDetails(todoItem) {

    const modal = document.createElement("div");
    modal.classList.add("modal");

    //close button for the modal
    const closeButton = document.createElement("button");
    closeButton.textContent = 'X';
    closeButton.addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    //display details in the modal (make it prettier also add animation and make it like refrence site (zindex))
    const detailsText = document.createElement("p");
    detailsText.textContent = `Details: ${JSON.stringify(todoItem)}`;

    modal.appendChild(closeButton);
    modal.appendChild(detailsText);
    document.body.appendChild(modal);
}

function editTodo(todoItem){//find better way to edit 
    formtest(todoItem);
}