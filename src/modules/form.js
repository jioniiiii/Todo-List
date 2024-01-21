        
const formtest = function(){
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

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';
    descriptionInput.placeholder = 'Description';
    descriptionInput.required = true;
    form.appendChild(descriptionInput);
   
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';
    const placeholderOption = document.createElement('option');//for place holder
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.text = 'Select Priority';
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
    submitButton.addEventListener('click', submitForm);
    form.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', submitForm);// gian ftaijeis des library
    form.appendChild(cancelButton);

    container.appendChild(contForm);

    function submitForm() {
   
        const todoName = document.getElementById('todoName').value;
        const description = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;
        const notes = document.getElementById('notes').value;

        alert(`Todo Name: ${todoName}\nDescription: ${description}\nPriority: ${priority}\nNotes: ${notes}`);
    }
}

export default formtest;