import "./style.scss"
import Project from "./functions/project.js";
import Display from "./functions/display.js";
import Task from "./functions/task.js";

//GLOBAL ELEMENT VARIABLES
const taskContainer = document.querySelector(".task-list")
// const addTaskBtn = document.querySelector(".add-task-btn")


const project = new Project();
const display = new Display();
const task = new Task();
let taskList = task.taskData()
let projectList = project.projectData()


//RENDER ALL PROJECT AND TASK
const renderTasks = () => {
	display.renderTasks(task.taskData())
	display.updateTaskHeading("All Tasks")
	// addTaskBtn.style.display = "none";
}



const renderAllProject = () => {
	display.renderAllProject(project.projectData())
}



//ADD PROJECT
const addProjectBtn = document.querySelector(".add-project-btn");

function handleAddProject(event) {
	let input = document.querySelector(".input-project");
	if (input.value === "") {
		alert("Project field cant be empty");
		return;
	}
	project.add(input.value)
	renderAllProject()
	input.value = "";
	console.log(input.value)
}


const projectDialog = document.querySelector(".project-dialog")
const addProject = () => {
	projectDialog.showModal();

}

//CANCEL DIALOG
const cancelDialog = document.querySelector(".cancel-project")
cancelDialog.addEventListener("click", () => {
	projectDialog.close()
})

addProjectBtn.addEventListener("click", addProject)

//SUBMIT NEW PROJECT
const submitProject = document.querySelector(".submit-project")
submitProject.addEventListener("click", () => {
	const input = document.querySelector("#input-project")

	if (input.value === "") {
		alert("Project field cant be empty");
		return;
	}
	project.add(input.value.toLowerCase())
	renderAllProject()
	input.value = "";
	console.log(input.value)

})

//HANDLE NAVIGATION BUTTON
const dateContainer = document.querySelector(".date-list");

dateContainer.addEventListener("click", event => {
	const btn = event.target;

	let btnName = btn.textContent.toLowerCase();

	switch (btnName) {
		case "all tasks":
			renderTasks();
			break;
		default:
			return;
	}

})



//HANDLE PROJECT EVENT
const projectBtn = document.querySelector(".project-list");
const handleProject = (event) => {

	let btn = event.target.closest("SPAN")
	if (btn === null) {
		return;
	}

	let data = btn.id.split("-");

	switch (btn.className) {
		case "delete-project-btn":
			handleDelete(data)
			break;
		case "project-name":
			showTaskByProject(btn);
			break;
		default:
			return;
	}
}


const handleDelete = (data) => {
	let idx = parseInt(data[1]);
	let name = data[0]
	project.delete(idx);
	renderAllProject()
	task.delete(name)
	display.renderAllTasks(task.taskData())
}


const showTaskByProject = (name) => {
	addTaskBtn.style.display = "block";
	let projectName = name.id.split("-")[0]
	console.log(projectName)
	display.showTaskByProject(projectName, task.taskData())
	task.getProjectName(projectName)

}


//ADD TASK BUTTON OR SHOW DIALOG NEW TASK
const addTaskBtn = document.querySelector(".add-task-btn");
const dialogTask = document.querySelector(".task-dialog");
const taskCancelBtn = document.querySelector(".task-cancel-btn");
const taskSubmitBtn = document.querySelector(".task-submit-btn");


const createTask = (project, task, description, date, priority) => {
	return { project, task, description, date, priority }
}

//SETUP DIALOG ELEMENT
let projectName = ""
const taskEl = document.querySelector("#task-title");
const descriptionEl = document.querySelector("#task-description");
const dateEl = document.querySelector("#task-date");
const priorityEl = document.querySelector("#task-priority");

const clearDialogInput = () => {
	taskEl.value = "";
	descriptionEl.value = "";
	dateEl.value = "";
	priorityEl.value = "";
	projectName = ""
}



addTaskBtn.addEventListener("click", () => {
	dialogTask.showModal()
})

taskCancelBtn.addEventListener("click", () => {
	dialogTask.close();
	clearDialogInput()
})


//SUBMIT TASK BTN
task.projectName()
taskSubmitBtn.addEventListener("click", () => {

	if (!taskEl.value) {
		alert("Task title can't be empty")
		return;
	}

	let projectName = task.projectName();
	let taskName = taskEl.value;
	let description = descriptionEl.value;
	let date = dateEl.value;
	let priority = priorityEl.value;


	let newTask = createTask(projectName, taskName, description, date, priority);
	console.log(newTask)
	task.addTask(newTask)
	display.showTaskByProject(projectName, task.taskData())
	// renderAllTasks()
	clearDialogInput()

})





const start = () => {
	renderAllProject()
	renderTasks()
}

projectBtn.addEventListener("click", handleProject)


document.addEventListener("DOMContentLoaded", start)