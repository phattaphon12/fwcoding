document.addEventListener("DOMContentLoaded", loadTodos);

        function addTodo() {
            let task = prompt("Enter a new To-Do:");
            if (task && task.trim() !== "") {
                createTodo(task);
                saveTodos();
            }
        }

        function createTodo(task) {
            let todo = document.createElement("div");
            todo.className = "todo";
            todo.textContent = task;

            todo.onclick = function() {
                if (confirm("Do you want to delete this To-Do?")) {
                    todo.remove();
                    saveTodos();
                }
            };

            let list = document.getElementById("ft_list");
            list.prepend(todo);
        }

        function saveTodos() {
            let todos = [];
            document.querySelectorAll(".todo").forEach(todo => {
                todos.push(todo.textContent);
            });
            document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
        }

        function loadTodos() {
            let cookies = document.cookie.split("; ");
            let todoCookie = cookies.find(row => row.startsWith("todos="));
            if (todoCookie) {
                let todos = JSON.parse(todoCookie.split("=")[1]);
                todos.forEach(task => createTodo(task));
            }
        }