


document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = taskInput.value;

       const deleteButton = document.createElement("button");

	const trashIcon = document.createElement("img");
	trashIcon.src = "delete.png";
	trashIcon.alt = "Corbeille"; 
	deleteButton.appendChild(trashIcon);
	deleteButton.addEventListener("click", () => {
   		 li.remove();
	});


        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});

