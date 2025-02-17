document.addEventListener("DOMContentLoaded", () => {
    const taskName = document.getElementById("taskName");
    const taskContent = document.getElementById("taskContent");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        if (taskName.value.trim() === "" || taskContent.value.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `<strong>${taskName.value} :</strong> ${taskContent.value} 
                        <button onclick="this.parentElement.remove()">🗑</button>`;//128465

        taskList.appendChild(li);
        taskName.value = "";
        taskContent.value = "";
    });
});
