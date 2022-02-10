import { LinkedList } from "./modules/linkedList.js";
import TodoList from "./modules/todoList.js";

let lista = new LinkedList();
let todo = new TodoList();

document.addEventListener("DOMContentLoaded", () => {
  let d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".btnPush")) todo.addTodo("push", lista);
    if (e.target.matches(".btnUnshift")) todo.addTodo("unshift", lista);
    if (e.target.matches(".btnPop")) todo.removeTodo("pop", lista);
    if (e.target.matches(".btnShift")) todo.removeTodo("shift", lista);
  });
});
