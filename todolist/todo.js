function createTask() {
    let text = document.getElementById("input").value
    let task = ` <div class="task">${text} <button onclick="deleteTask(parentNode)" class="del">done</button></div>`
    document.querySelector(".tasks").innerHTML += task;
    document.getElementById("input").value = ""
};

function deleteTask(parentNode){
    parentNode.remove()

};