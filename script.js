
let todos = [];
let filter = "all";

const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

// add Todo

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
        todos.push({
            id: Date.now(),
            text:input.value,
            completed: false,
        })
    }

    input.value = ""
    renderTodos();
    
})

