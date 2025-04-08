const mainToDoElem = document.querySelector(".todo-list-elem");
const inputValue = document.getElementById("inputValue");

let localTodoList = [];

const addToDoList = (e) => {
    e.preventDefault();

    const TodolistValue =inputValue.value.trim()

    const divElement = document.createElement("div");
    
    localTodoList.push(TodolistValue);
    localTodoList = new Set(localTodoList);
    console.log(localTodoList);

    divElement.classList.add("main_todo_div");
    divElement.innerHTML = `<li>${inputValue.value}</li> <button class="deleteBtn">Delete</button>`;
    mainToDoElem.append(divElement);
}

document.querySelector(".btn").addEventListener("click", (e) => {
    addToDoList(e);
})