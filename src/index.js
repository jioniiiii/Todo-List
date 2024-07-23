import './styles/main.css';
import todoBtn from './modules/main';
import { tempStorage, refreshDisplay } from './modules/factory';

function loadFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {

        const parsedTodos = JSON.parse(savedTodos);
       
        tempStorage.length = 0; 
        parsedTodos.forEach(todoItem => tempStorage.push(todoItem));
        refreshDisplay(); 
    }
}

todoBtn();
loadFromLocalStorage(); 
    


