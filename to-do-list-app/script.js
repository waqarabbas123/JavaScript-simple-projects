const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	const task = taskInput.value.trim();
	if (task) {
		const taskElement = document.createElement('li');
		taskElement.textContent = task;
		taskList.appendChild(taskElement);
        taskElement.style.color = 'white'
		taskInput.value = '';
	}
}

taskList.addEventListener('click', toggleTaskDone);

function toggleTaskDone(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
	}
}