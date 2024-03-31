import icons from "./icons.js";
class Display {

	constructor() {
		this.filteredTask = [];
	}

	renderAllProject(data) {
		const projectContainer = document.querySelector(".project-list");
		let innerProject = "";
		data.forEach((item, index) => {
			innerProject += `<li class="project-item" >
			<span class="project-name" id="${item}-${index}" >${item}</span>
			<span class="delete-project-btn" id="${item}-${index}" >${icons.delete}</span>
			</li>`
		})
		projectContainer.innerHTML = innerProject;
	}


	renderAllTasks(taskList) {
		const taskContainer = document.querySelector(".task-list");
		taskContainer.innerHTML = "";
		this.renderTasks(taskList)
		console.log(taskList)
	}


	renderTasks(taskList) {

		const taskContainer = document.querySelector(".task-list");
		taskContainer.innerHTML = "";
		let innerTask = "";
		taskList.forEach(({ id, project, task, description, date, priority }, index) => {
			const priorityIcon = (status) => {
				if (status === "normal") {
					return icons.lightStar;
				} else if (status === "medium") {
					return icons.solidStar;
				} else {
					return icons.solidStar + icons.solidStar
				}
			}

			innerTask += `
					<li class="task-item" >
					<div class="task-info">
						<input type="checkbox" class="task-status" />
						<span class="task-name">${task}</span>
					</div>
					<div class="task-action">
						<span class="task-date">${date}</span>
						<span class="task-priority">${priorityIcon(priority)}</span>
						<span class="task-edit" id="${task}-${index}">${icons.edit}</span>
						<span class="task-delete" id="${project}-${id}" >${icons.delete}</span>
						<span class="task-info" id="${task}-${index}">${icons.detail}</span>
					</div>
				</li>			
				`
			taskContainer.innerHTML = innerTask;
		})


	}

	showTaskByProject(projectName, taskList) {
		if (projectName === "general") {
			this.renderTasks(taskList)
		} else {
			this.renderTasks(taskList.filter((task) => task.project === projectName))
			this.updateTaskHeading(projectName)
		}
	}

	updateTaskHeading(name) {
		const taskHeading = document.querySelector(".task-heading");
		taskHeading.textContent = name
	}

	showInfo(element, taskData, dialogDiv) {
		console.log(element, taskData)

		let innerInfo = "";
		let taskIdx = parseInt(element.id.split("-")[1]);
		innerInfo = `
			<li>
				<h3>Project</h3>
				<p>${taskData[taskIdx].project}</p>			
			</li>
			<li>
				<h3>Task</h3>
				<p class="task">${taskData[taskIdx].task}</p>
			</li>
			<li>
				<h3>Due date</h3>
				<p>${taskData[taskIdx].date}</p>
			</li>
			<li>
				<h3>Note</h3>
				<p>${taskData[taskIdx].description ? taskData[taskIdx].description : "No note"}</p>
			</li>
			<li>
				<h3>Priority</h3>
				<p class="task">${taskData[taskIdx].priority}</p>
			</li>
				`
		dialogDiv.innerHTML = innerInfo;
	}



}

export default Display;
