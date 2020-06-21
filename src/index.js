import './styles.css';

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo) ); // Es lo mismo que la linea de abajo
todoList.todos.forEach( crearTodoHtml );

console.log('todos', todoList.todos);

// const tarea = new Todo('Aprender JavaScript!! :3');

// todoList.nuevoTodo( tarea );


// console.log(todoList);

// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'PAPU  LINCE :V');
// sessionStorage.setItem('mi-key', 'PAPU  LINCE :V');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);