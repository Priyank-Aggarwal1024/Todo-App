let date = document.querySelector('#eventDate');
let eventTodo = document.querySelector('#eventInput');
let main = document.querySelector('.main');
let add = document.querySelector('#eventAdd');

eventTodo.value = "";
date.value = "";

const createElements = function () {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    let todoPD = document.createElement('div');
    todoPD.classList.add('todoPD');
    let todoEdit = document.createElement('button');
    todoEdit.classList.add('todoEdit');
    let todoDelete = document.createElement('button');
    todoDelete.classList.add('todoDelete');
    let todoP = document.createElement('p');
    todoP.classList.add('todoP');
    let todoD = document.createElement('p');
    todoD.classList.add('todoD');
    let todoSpan = document.createElement('p');
    todoSpan.classList.add('todoSpan');


    main.append(todoDiv);
    todoDiv.append(todoPD);
    todoDiv.append(todoEdit);
    todoDiv.append(todoDelete);
    todoPD.append(todoSpan)
    todoPD.append(todoP);
    todoPD.append(todoD);

    todoEdit.innerText = "Edit"
    todoDelete.innerText = "Delete"
    let dateEvent = date.value
    todoD.innerText = dateEvent;

    let todo = eventTodo.value;
    todoP.innerText = todo;
    eventTodo.value = ""

    let editButton = document.querySelectorAll('.todoEdit')
    let deleteButton = document.querySelectorAll('.todoDelete')
    let displayDiv = document.querySelectorAll('.todoDiv');
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function () {

            displayDiv[i].remove();
        })
    }

    let editEvent = document.querySelectorAll('.todoP')

    for (let i = 0; i < editButton.length; i++) {
        editButton[i].addEventListener('click', function () {
            eventTodo.value = editEvent[i].innerText;
            displayDiv[i].remove();
        })
    }
}
add.addEventListener('click', function (event) {
    if ((eventTodo.value.trim() == "")) {
        alert('Add a task');
    }
    else if ((date.value == "")) {
        alert('Set the Date');
    }
    else {
        createElements();

    }
})
