let myStorage = window.localStorage;

let tasks = [];

function idGenerator() {
    var timestamp = new Date();

    var id =
        timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();

    return id;
}

function createTask(taskDescription) {
    var task = {
        id: idGenerator(),
        data: {
            description: taskDescription
        }
    };

    tasks.push(task);

    myStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
    tasks = tasks.filter( task => task.id != id);

    myStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks_str = myStorage.getItem("tasks");

    if(tasks_str) {
        tasks = JSON.parse(tasks_str);
    }
}