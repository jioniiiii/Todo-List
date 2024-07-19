import { closeForm } from './closeForm';
import { display } from './DOM';
import { showError } from './errorMsg/errorEmptyTodo';

    export const tempStorage = [];

    export function todo(todoName, dueDate, priority, notes) {
        this.todoName = todoName;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    export function addTodo(){
        const todoName = document.getElementById('todoName').value;
        if(todoName === ''){
            showError('Error: Todo title cant be empty!');
            return
        }
        const date = document.getElementById('dueDate').value;
        if(date === ''){
            showError('Error: Todo due date cant be empty!');
            return
        }
        let priority = document.getElementById('priority').value;
        if(priority === 'Select Priority'){
            priority = '';
            if(priority === ''){
                showError('Error: Todo priority cant be empty!');
                return
            }
        }     
        const notes = document.getElementById('notes').value;

        let newTodo = new todo(todoName, date, priority, notes);
        tempStorage.push(newTodo);

        console.log(tempStorage);
        alert(`Todo Name: ${todoName}\nPriority: ${priority}\nNotes: ${notes}`);
        display(tempStorage.length - 1);
        closeForm();
    }