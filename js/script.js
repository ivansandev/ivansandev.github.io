/*************** To-Do list ***************/

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

todoInput.addEventListener("keypress", addTodoOnKeypress);

/*************** To-Do animation ***************/
const todoHeaderClick = document.getElementById("todoHeader");
const todoContent = document.getElementById("todoContent");
var todoVisible = 0;

const showTodoContainer = () => {
    if (!todoVisible) {
        todoHeaderClick.classList.add("animated", "pulse");
        todoContent.classList.remove("animated", "fadeOutRight", "faster");
        todoContent.classList.add("animated", "fadeInRight", "faster");
        todoContent.style.visibility = "visible";
        todoVisible = 1;
    }
    else {
        todoHeaderClick.classList.remove("animated", "pulse");
        todoContent.classList.remove("animated", "fadeInRight", "faster");
        todoContent.classList.add("animated", "fadeOutRight", "faster");
        todoVisible = 0;
    }
}

todoHeaderClick.addEventListener("click", showTodoContainer);

/*************** Sign in ***************/

let signInForm = document.getElementById("signInForm");

const goToLoginScreen = () => window.location.replace("sign.html");

signInForm.addEventListener("click", goToLoginScreen)
