import { Node, LinkedList } from "./linkedList.js";

let listStore = new LinkedList();
export default class TodoList {
  constructor(task = "", finish = false) {
    this.task = task;
    this.finish = finish;
  }

  // showCountTodo
  showCountTodo(linkedList) {
    let countSpan = document.querySelector(".content__countTask span");
    countSpan.textContent = linkedList.size();
  }

  // displayTodo
  displayTodo(linkedList) {
    let sectionTodo = document.querySelector(".result");

    sectionTodo.innerHTML = "";

    let results = linkedList.print();

    results.forEach((elem) => {
      let { task, finish } = elem,
        tagI = "",
        className = "";

      if (!finish) {
        tagI = "<i class='bx bx-circle noFinish'></i>";
        className = "";
      } else {
        tagI = "<i class='bx bxs-check-circle finish'></i>";
        className = "finishTask";
      }

      sectionTodo.innerHTML += `
        <li class=${className}> -  
          <span>${task}</span>
          ${tagI}
        </li>
      `;
    });
  }

  // addTodo
  addTodo(method, linkedList) {
    let input = document.querySelector("#task");
    let textTask = "";

    if (input.value.length === 0) return alert("Ingresa una tarea");

    textTask = input.value.toLowerCase();

    if (method === "push") linkedList.push(new TodoList(textTask));

    if (method === "unshift") linkedList.unshift(new TodoList(textTask));

    // save storage
    localStorage.setItem("todoList", JSON.stringify(linkedList));

    this.showCountTodo(linkedList);

    this.displayTodo(linkedList);

    // clear & focus
    input.value = "";
    input.focus();
  }

  // removeTodo
  removeTodo(method, linkedList) {
    let sectionTodo = document.querySelector(".result");

    if (sectionTodo.innerHTML === "") return alert("No hay tareas a eliminar");

    if (method === "pop") linkedList.pop();

    if (method === "shift") linkedList.shift();

    // save storage
    localStorage.setItem("todoList", JSON.stringify(linkedList));

    this.showCountTodo(linkedList);

    this.displayTodo(linkedList);
  }

  // finishTodo
  stateTodo(event, state, linkedList) {
    let li = event.target.parentNode;
    let spanText = li.querySelector("span").textContent;
    let objTask = linkedList.search(spanText);

    if (state === "finish") objTask["finish"] = true;
    else if (state === "noFinish") objTask["finish"] = false;

    this.displayTodo(linkedList);
  }

  // searchTodo
  searchTodo(linkedList) {
    let sectionTodo = document.querySelector(".result");

    if (sectionTodo.innerHTML === "") return alert("No hay tareas a buscar");

    let dato = prompt("Ingrese una tarea buscar");

    if (dato === "") return alert("Ingrese una palabra");

    let { task } = linkedList.search(dato);
    let spanTasks = Array.from(document.querySelectorAll(".result li span"));

    spanTasks.forEach((spanTask) => {
      if (task === spanTask.textContent) {
        let li = spanTask.parentElement;
        li.classList.add("activeTask");
        setTimeout(() => {
          li.classList.remove("activeTask");
        }, 4000);
      }
    });
  }
}
