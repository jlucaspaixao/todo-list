function newTask() {
    var taskDescription = document.getElementById("newTask").value;

    var queryString = window.location.search
    var urlSearch = new URLSearchParams(queryString)
    var id = urlSearch.get('id')

    if (id) {
        updateTask(id, taskDescription);
    } else {
        createTask(taskDescription);
    }

    updateScreen();
}

function updateScreen() {
    var list = "<ul>";

    tasks.forEach(task => {
        list += "<li class='d-flex align-items-center' id-data=" + task.id + ">"
        list += "<span>" + task.data.description + "</span>"
        list += "<button class = 'btn btn-info' onclick=editTask(this) id-data=" + task.id + ">Editar</button>"
        list += "<button class = 'btn btn-danger' onclick=removeTask(this) id-data=" + task.id + ">Apagar</button>"
        list += "</li>"
    });

    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

function removeTask(element) {
    var id = element.getAttribute("id-data");

    deleteTask(id);
    updateScreen();
}

function editTask(element) {
    var id = element.getAttribute("id-data");
    window.location.href = './index.html?id=' + id
}

loadTasks();
updateScreen();

function init() {
    var queryString = window.location.search
    var urlSearch = new URLSearchParams(queryString)
    var id = urlSearch.get('id')

    if (id) {
        task = tasks.find(task => task.id === id)
        document.getElementById("newTask").value = task.data.description
        document.getElementById('btn-new-task').innerText = 'Editar'
    }
}

init()
