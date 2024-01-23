import { tempStorage , todo} from "./factory";

export function display(index){

    const todo = tempStorage[index];

    const container = document.querySelector(".container");
    
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const todoTitle = document.createElement("p");
    todoTitle.textContent = ` "${todo.todoName}" `;
    cardDiv.appendChild(todoTitle);

    const todoDesc = document.createElement("p");
    todoDesc.textContent = `${todo.description}`;
    cardDiv.appendChild(todoDesc);

    const todoDate = document.createElement("p");
    todoDate.textContent = `${todo.dueDate} `;
    cardDiv.appendChild(todoDate);

    const todoPriority = document.createElement("p");
    todoPriority.textContent = ` "${todo.priority}" `;
    cardDiv.appendChild(todoPriority);

    const todoNotes = document.createElement("p");
    todoNotes.textContent = `${todo.notes}`;
    cardDiv.appendChild(todoNotes);

    container.appendChild(cardDiv);

}
