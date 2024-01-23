import { closeForm } from './closeForm';
import { display } from './DOM';

    export const tempStorage = [];

    export function todo(todoName, description, dueDate, priority, notes) {
        this.todoName = todoName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    export function addTodo(){
        const todoName = document.getElementById('todoName').value;
        if(todoName == ''){//add message with dom to fill out the apraeter
            console.log("works");
            return
        }
        const description = document.getElementById('description').value;
        const date = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const notes = document.getElementById('notes').value;

        let newTodo = new todo(todoName, description, date, priority, notes);
        tempStorage.push(newTodo);

        console.log(tempStorage);
        alert(`Todo Name: ${todoName}\nDescription: ${description}\nPriority: ${priority}\nNotes: ${notes}`);
        display(tempStorage.length - 1);
        closeForm();
    }