document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskDatetime = document.getElementById("task-datetime");
    const addBtn = document.getElementById("add");
    const tasksList = document.getElementById("tasks");

    // Function to format the time in 12-hour format with AM or PM
    function formatTime(dateTime) {
        const date = new Date(dateTime);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const amPm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12; // Convert 0 to 12
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${amPm}`;
    }

    // Add a task to the list
    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value;
        const taskDateTime = taskDatetime.value;

        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} - ${formatTime(taskDateTime)} <button class="edit">Edit</button> <button class="delete">Delete</button>`;
            tasksList.appendChild(li);
            taskInput.value = "";
            taskDatetime.value = "";

            // Handle Edit and Delete
            li.querySelector(".edit").addEventListener("click", function () {
                const newText = prompt("Edit the task:", taskText);
                if (newText !== null) {
                    taskText = newText;
                    li.innerHTML = `${taskText} - ${formatTime(taskDateTime)} <button class="edit">Edit</button> <button class="delete">Delete</button>`;
                }
            });

            li.querySelector(".delete").addEventListener("click", function () {
                tasksList.removeChild(li);
            });
        }
    });
});
