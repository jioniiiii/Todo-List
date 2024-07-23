import { tempStorage , todo, saveToLocalStorage, refreshDisplay} from "./factory";

export function display(index){

    const existingCard = document.querySelector(`.card[data-index="${index}"]`);
    if (existingCard) {
        container.removeChild(existingCard);
    }

    const todoItem = tempStorage[index];

    const container = document.querySelector(".card-cont");
    
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
        tempStorage.splice(index, 1); 
        saveToLocalStorage(); 
        refreshDisplay();
    });

    const buttonDet = document.createElement('button');//detail button
    buttonDet.textContent = 'DETAILS';
    buttonDet.addEventListener("click", function() {
        showDetails(todoItem);
    });

    const buttonEdit = document.createElement('button');//detail button
    buttonEdit.textContent = 'EDIT';
    buttonEdit.addEventListener("click", function() {
        editTodo(todoItem, index);
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

function editTodo(todoItem, index) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const closeButton = document.createElement("button");
    closeButton.textContent = 'X';
    closeButton.addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = todoItem.todoName;
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due Date: ";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = todoItem.dueDate;
    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.value = todoItem.priority;
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes: ";
    const notesInput = document.createElement("textarea");
    notesInput.value = todoItem.notes;
    form.appendChild(notesLabel);
    form.appendChild(notesInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();

        todoItem.todoName = nameInput.value;
        todoItem.dueDate = dateInput.value;
        todoItem.priority = priorityInput.value;
        todoItem.notes = notesInput.value;

        tempStorage[index] = todoItem;
        document.body.removeChild(modal);
        refreshDisplay();
    });

    form.appendChild(saveButton);
    modal.appendChild(closeButton);
    modal.appendChild(form);
    document.body.appendChild(modal);
}