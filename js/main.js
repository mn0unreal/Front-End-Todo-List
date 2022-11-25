let taskInput = document.querySelectorAll('input');
let addTaskBtn = document.getElementById('addTaskBtn');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');
let validationMessage = document.getElementById('validationMessage');
let closeValidationMessageBtn = document.getElementById('closeValidationMessageBtn');

let noTasksChecker = () => {
    if (allTasks.childElementCount == 0) {
        noTask.classList.remove('none');
    }
}

let addTask = (name, date) => {

    if (name.trim() == "" || date.trim() == "") {
        validationMessage.classList.remove('none');
        if (name.trim() == "") {
            validationMessage.innerHTML = "You must enter Name ";
        } else if (date.trim() == "") {
            validationMessage.innerHTML = "You must enter Date";
        }
    } else {
        noTask.classList.add('none');
        validationMessage.classList.add('none');
        allTasks.innerHTML += `
        <div class='alert alert-info'> 
            ${name}
            <i class="delete text-danger float-right fa-solid fa-rectangle-xmark"></i>
            <p class='float-right'>  ${date} </p>
        </div>
        `;

    }
    taskInput.value = "";
}


let renderTask = () => {
    let allTask = {
        taskName: taskInput[0].value,
        date: taskInput[1].value
    }
    addTask(allTask.taskName, allTask.date);
}

addTaskBtn.addEventListener('click', renderTask);

closeValidationMessageBtn.addEventListener('click', function () {
    validationMessage.classList.add('none');
})

document.addEventListener('click', function (t) {
    if (t.target.classList.contains('delete')) {
        t.target.parentElement.remove();
        noTasksChecker();
    }
})


