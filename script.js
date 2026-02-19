
let todos = [];
let filter = "all";

const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

const allBtn = document.getElementById("all");
const activeBtn = document.getElementById("active");
const completedBtn = document.getElementById("completed");
const clearCompletedBtn = document.getElementById("clear-completed");

// add Todo

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
        todos.push({
            id: Date.now(),
            text:input.value,
            completed: false,
        })
    }
    todos.push(newTodo);
    input.value = ""
    renderTodos();
    
})

function renderTodos() {
  list.innerHTML = "";

  let filteredTodos = todos;

  if (filter === "active") {
    filteredTodos = todos.filter(t => !t.completed);
  }

  if (filter === "completed") {
    filteredTodos = todos.filter(t => t.completed);
  }

  filteredTodos.forEach(todo => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between px-4 py-2 border-b";

    li.innerHTML = `
      <div class="flex items-center gap-3">
        <input type="checkbox" ${todo.completed ? "checked" : ""} 
          onclick="toggleTodo(${todo.id})" />
        <span class="${todo.completed ? "line-through text-gray-400" : ""}">
          ${todo.text}
        </span>
      </div>
      <button onclick="deleteTodo(${todo.id})" class="text-red-400">x</button>
    `;

    list.appendChild(li);
  });

  updateCount();
}

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

document.getElementById("all").onclick = function() {
  filter = "all";
  renderTodos();
};

document.getElementById("active").onclick = function() {
  filter = "active";
  renderTodos();
};

document.getElementById("completed").onclick = function() {
  filter = "completed";
  renderTodos();
};



