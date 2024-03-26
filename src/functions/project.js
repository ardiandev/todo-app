class Project {
	#project
	constructor() {
		this.#project = ["home", "work", "school"]
	}
	
	add(name) {
		if (!this.#project.includes(name)) {
			this.#project.push(name);
			console.log(this.#project)
		} else [
			alert("Project already exist")
		]
	}
	
	delete(idx) {
		if (idx >= 0) {
			this.#project.splice(idx, 1)
		} else {
			return;
		}
	}
	
	projectData() {
		return [...this.#project]
	}

}

export default Project
