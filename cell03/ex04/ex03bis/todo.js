$(document).ready(function () {
    loadTodos(); // โหลด To-Do ที่บันทึกไว้ตอนเริ่มต้น

    $("#new").click(function () {
        addTodo(); // ผูกปุ่ม "New" ให้สร้าง To-Do ใหม่
    });
});

function addTodo() {
    let task = prompt("Enter a new To-Do:");
    if (task && task.trim() !== "") {
        createTodo(task);
        saveTodos();
    }
}

function createTodo(task) {
    let todo = $("<div>").addClass("todo").text(task);

    todo.click(function () {
        if (confirm("Do you want to delete this To-Do?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function saveTodos() {
    let todos = [];
    $(".todo").each(function () {
        todos.push($(this).text());
    });
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    let todoCookie = cookies.find(row => row.startsWith("todos="));

    if (todoCookie) {
        try {
            let todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
            if (Array.isArray(todos)) {
                todos.forEach(task => createTodo(task));
            }
        } catch (error) {
            console.error("Error parsing cookies:", error);
        }
    }
}
