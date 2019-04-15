///////////// To-Do list
const todoInput = document.getElementById("todoInput");
const ul = document.getElementById("todoContainer");
// const clearButton = document.getElementById("clearButton");

const addTodoOnKeypress = event => {
    if ((event.which) === 13 && (todoInput.value.length>0)) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(todoInput.value));
        ul.appendChild(li);
        console.log(li);
        todoInput.value = "";
    }
}

// const clearTodo = () => {
    
// }

todoInput.addEventListener("keypress", addTodoOnKeypress);
// clearButton.addEventListener("click", clearTodo);


const todoHeaderClick = document.getElementById("todoHeader");
const todoContent = document.getElementById("todoContent");
var todoVisible = 0;

const showTodoContainer = () => {

    if (!todoVisible) {
        todoHeaderClick.classList.add("animated", "pulse");
        todoContent.classList.remove("animated", "fadeOutRight", "fast");
        todoContent.classList.add("animated", "fadeInRight", "fast");
        todoContent.style.visibility = "visible";
        todoVisible = 1;
    }
    else {
        todoHeaderClick.classList.remove("animated", "pulse");
        todoContent.classList.remove("animated", "fadeInRight", "fast");
        todoContent.classList.add("animated", "fadeOutRight", "fast");
        console.log("test");
        
        // todoContent.style.visibility = "visible";
        todoVisible = 0;
    }
}

todoHeaderClick.addEventListener("click", showTodoContainer);