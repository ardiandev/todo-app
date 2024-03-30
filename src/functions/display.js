import icons from "./icons.js"

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
		taskList.forEach(({ task, description, date, priority }, index) => {
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
						<span class="task-edit">${icons.edit}</span>
						<span class="task-delete">${icons.delete}</span>
						<span class="task-info">${icons.detail}</span>
					</div>
				</li>			
				`
			taskContainer.innerHTML = innerTask;
		})


	}

	showTaskByProject(name, taskList) {
		console.log(taskList)
		this.renderTasks(taskList.filter((task) => task.project === name))

	}



}

export default Display;
