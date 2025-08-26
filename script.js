// Get elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent toggle complete
    li.remove();
  });

  // Add delete button to task
  li.appendChild(deleteBtn);

  // Add task to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Add button click
addBtn.addEventListener("click", addTask);

// Enter key support
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
