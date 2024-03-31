import { filter } from "domutils";

class Task {
	#task
	#projectName

	constructor() {
		this.#projectName = "general";
		this.#task = [
			{
				id: 0,
				project: "home",
				task: "eating",
				description: "must eat vegetables",
				date: "23-02-2023",
				priority: "normal"
			},
			{
				id: 1,
				project: "home",
				task: "drinking",
				description: "must drink juice",
				date: "23-02-2023",
				priority: "high"
			},
			{
				id: 2,
				project: "school",
				task: "practice basketball",
				description: "final competiton",
				date: "23-02-2023",
				priority: "medium"
			},
			{
				id: 3,
				project: "work",
				task: "math test",
				description: "mid semester test",
				date: "23-02-2023",
				priority: "high"
			}
		]

	}

	addTask(newTask) {
		this.#task.push(newTask)
		console.log(this.#task)
	}

	delete(name) {
		for (let i = this.#task.length - 1; i >= 0; i--) {

			if (this.#task[i].project === name) {
				this.#task.splice(i, 1)
				console.log(this.#task)
			}
		}

	}




	taskData() {
		return [...this.#task]
	}


	getProjectName(name) {
		// console.log(name)
		this.#projectName = name;
		// console.log(this.#projectName)

	}

	projectName() {
		// console.log(this.#projectName);
		return this.#projectName
	}


	deleteById(data) {
		let filterByProject = []
		let rawData = data.split("-");
		let projectName = rawData[0];
		let taskId = parseInt(rawData[1])
		console.log(taskId)

		this.#task.forEach((task, index) => {
			if (task.id === taskId) {
				this.#task.splice(index, 1)
			}
		})

	}
}

export default Task;
