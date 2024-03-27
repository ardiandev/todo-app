class Task {
	#task
	 constructor() {
			this.#task = [
				{
					project: "home", 
					task: "eating", 
					description: "must eat vegetables",
					date: "23-02-2023", 
					priority: "normal"
				},
				{
					project: "school", 
					task: "practice basketball", 
					description: "final competiton",
					date: "23-02-2023", 
					priority: "medium"
				},
				{
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
	
	
	taskData() {
		return [...this.#task]
	}
	
}

export default Task;
