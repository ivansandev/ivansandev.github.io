/*************** To-Do list ***************/

const todoInput = document.getElementById("todoInput");
const ul = document.getElementById("todoContainer");
// const clearButton = document.getElementById("clearButton");

const addTodoOnKeypress = event => {
    if ((event.which) === 13 && (todoInput.value.length > 0)) {
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

/*************** Nav Links ***************/

let logoHomeButton = document.getElementById("logoHome");
const goToHome = () => window.location.assign("index.html");
logoHomeButton.addEventListener("click", goToHome);

let signInNav = document.getElementById("signInNav");
const goToLoginScreen = () => window.location.assign("sign.html");
signInNav.addEventListener("click", goToLoginScreen);

let photographyNav = document.getElementById("photographyNav");
const goToPhotography = () => window.location.assign("photography.html");
photographyNav.addEventListener("click", goToPhotography);

/*************** Nav Links mobile responsive ***************/

const menuButton = document.getElementsByClassName("mobileNavButton")[0];
const navBar = document.getElementsByClassName("navHeader");
var menuVisible = false;
// const navBar = document.getElementById("rightContainerFixed");
const hideMenu = (x) => {
    x.classList.toggle("buttonAnimation");
    console.log(x);
    
    let i;
    if (menuVisible === true) {
        for (i = 0; i < 3; i++) {
            navBar[i].style.visibility = "hidden";
            navBar[i].style.visibility = "hidden";
            navBar[i].style.visibility = "hidden";
        }
        menuVisible = false;
    }
    else if (menuVisible === false) {
        for (i = 0; i < 3; i++) {
            navBar[i].style.visibility = "visible";
            navBar[i].style.visibility = "visible";
            navBar[i].style.visibility = "visible";
        }
        menuVisible = true;
    }
    
    // nav.style.display = "none";
    // navBar.forEach(navBar => {
    //     navBar.style.display = "none";
    //     console.log(navBar);
    // })
    // navBar.style.display = "none";
}
menuButton.addEventListener("click", hideMenu);

/*************** Menu button animation ***************/
