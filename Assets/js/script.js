const addTaskBtn = document.getElementById('addTask');
const taskNameInput = document.getElementById('taskName');
const assignedToInput = document.getElementById('assignedTo');
const categoriesSelect = document.getElementById('categories');
const taskDateInput = document.getElementById('taskDate');
const recordsDisplay = document.getElementById('records');

let taskArray = [];

let objStr = localStorage.getItem('tasks');

if (objStr != null) {
    taskArray = JSON.parse(objStr);
}

addTaskBtn.onclick = () => {
    const taskName = taskNameInput.value;
    const assignedTo = assignedToInput.value;
    const categories = categoriesSelect.value;
    const taskDate = taskDateInput.value;

    const currentDate = new Date();
    const inputTaskDate = new Date(taskDate);

    if (taskName.trim() === '' || assignedTo.trim() === '') {
        window.alert('Please fill in all required fields.');
    } else if (inputTaskDate < currentDate) {
        window.alert('Task date cannot be earlier than the current date.');
    } else {
        window.alert('Task added successfully!');

        taskArray.push({
            'taskName': taskName,
            'assignedTo': assignedTo,
            'categories': categories,
            'taskDate': taskDate,
            'status': 'Pending'
        });

        SaveTasks(taskArray);

        taskNameInput.value = '';
        assignedToInput.value = '';
        categoriesSelect.value = 'Work';
        taskDateInput.value = '';
    }
};

function SaveTasks(taskArray) {
    let str = JSON.stringify(taskArray);
    localStorage.setItem('tasks', str);
    // DisplayTasks();
}

