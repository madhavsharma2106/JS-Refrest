//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all Event Listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    //Add Event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear tasks
    clearBtn.addEventListener('click', clearTasks);

    //Filter Task Events
    filter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task')
    }

    //Create Li Element
    const li = document.createElement('li');

    //Add Class
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link element
    const link = document.createElement('a');

    //Add Class
    link.className = 'delete-item secondary-content';

    //Icon Html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append li to ul
    li.appendChild(link);

    console.log(li);
    taskList.appendChild(li);

    //Clear Input

    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }

}

function clearTasks() {
    // taskList.innerHTML = '';

    //Faster 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

//Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    )
}