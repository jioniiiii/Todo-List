import { addTodo } from './factory';
import { closeForm } from './closeForm';

const formtest = function(callback){
    const container = document.querySelector(".container");
    const contForm = document.createElement('div');
        contForm.classList.add('contForm');
        const form = document.createElement('form');
        form.id = 'todoForm';
        contForm.appendChild(form);

    const todoNameInput = document.createElement('input');
        todoNameInput.type = 'text';
        todoNameInput.id = 'todoName';
        todoNameInput.name = 'todoName';
        todoNameInput.placeholder = 'Todo Name';
        todoNameInput.required = true;
        form.appendChild(todoNameInput);

    const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'dueDate';
        dateInput.name = 'dueDate';
        form.appendChild(dateInput);
   
    const prioritySelect = document.createElement('select');//maybe to three buttons with colors
        prioritySelect.id = 'priority';
        prioritySelect.name = 'priority';
        const placeholderOption = document.createElement('option');//for place holder
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        placeholderOption.textContent = 'Select Priority';
        prioritySelect.appendChild(placeholderOption);
        const priorityOptions = ['High', 'Medium', 'Low'];
        priorityOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            prioritySelect.appendChild(option);
        });
        form.appendChild(prioritySelect);

    const notesTextarea = document.createElement('textarea');
        notesTextarea.id = 'notes';
        notesTextarea.name = 'notes';
        notesTextarea.placeholder = 'Notes';
        notesTextarea.rows = 4;
        form.appendChild(notesTextarea);

    const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', function(){
            addTodo();
            closeForm(callback);
        });
        form.appendChild(submitButton);

    const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', function(){
            closeForm(callback);
        });
        form.appendChild(cancelButton);

    container.appendChild(contForm);
}

export default formtest;