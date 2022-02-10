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
        <li class=${className}>
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

    this.showCountTodo(linkedList);

    this.displayTodo(linkedList);

    // clear & focus
    input.value = "";
    input.focus();
  }

  // removeTodo
  removeTodo(method, linkedList) {
    if (method === "pop") linkedList.pop();

    if (method === "shift") linkedList.shift();

    this.showCountTodo(linkedList);

    this.displayTodo(linkedList);
  }
}
