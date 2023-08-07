const todoContainer = document.querySelector(".Container");
reload();

function todoClicked(event) {
    const todo = event.target.parentNode;
    const todoText = todo.children[1].children[0];
    todoText.classList.toggle("done");
}

// Important 체크박스 색상 바꿈 기능 
function plusImportant(event) {
    const box = event.target.parentNode
    box.classList.toggle('importantChecked', event.target.checked);
}

function addTodo(text) {
    const newTodo = document.createElement("div");
    newTodo.className = "todo";

    const newCheck = document.createElement("input");
    newCheck.type = "checkbox";
    newCheck.className = "checkbox";

    const newText = document.createElement("div");
    newText.className = "todoText";

    const spanText = document.createElement("span");
    spanText.className = "text";
    spanText.innerText = text;

    const spanTrash = document.createElement("span");
    spanTrash.className = "trash";
    spanTrash.innerText = "🗑️";

    // Important 체크박스 체크 시 아이콘 ⭐ 추가
    const importantCheckbox = document.querySelector(".Importantcheckbox");
    if (importantCheckbox.checked) {
        newText.innerText = "⭐" + newText.innerText;
    }

    newText.appendChild(spanText);

    newText.appendChild(spanTrash);

    newTodo.appendChild(newCheck);

    newTodo.appendChild(newText);

    todoContainer.prepend(newTodo);
}

const todoForm = document.querySelector("form");

function getInputAndAdd(event) {
    event.preventDefault();
    const todoInput = document.querySelector(".newTodo");
    addTodo(todoInput.value);
    todoInput.value = "";
    reload();
}

todoForm.addEventListener("submit", getInputAndAdd);

function todoDelete(event) {
    const clickedTodoText = event.target.parentNode.children[0].innerText;
    console.log(clickedTodoText);
    const removeTodo = event.target.parentNode.parentNode;
    const ok = confirm("Delete Todo: " + clickedTodoText + "?");
    if (ok) {
        removeTodo.remove();
    }
}

function reload() {
    let checkboxes = document.querySelectorAll(".checkbox");
    let trashIcons = document.querySelectorAll(".trash");
    let Importantcheckbox = document.querySelectorAll('.Importantcheckbox')

    checkboxes.forEach((element) => {
        element.addEventListener("click", (event) => todoClicked(event));
    });

    trashIcons.forEach((element) => {
        element.addEventListener("click", (event) => todoDelete(event));
    });

    Importantcheckbox.forEach((element) => {
        element.addEventListener("click", (event) => plusImportant(event));
    });
}