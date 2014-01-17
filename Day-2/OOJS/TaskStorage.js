function getTaskStorage(fn){
	var browserStore = window.localStorage;

	function getAllTasksFromStorage(){
		var tasks = [];
		for(var i=0;i<browserStore.length;i++){
			var taskId = browserStore.key(i);
			var task = JSON.parse(browserStore.getItem(taskId));
			tasks.push(task);
		}
		if (!!this.onCountChanged)
			this.onCountChanged(browserStore.length);
		return tasks;
	}

	function addTaskToStorage(taskName){
		var newTask = new Task(taskName);
		browserStore.setItem(newTask.id, JSON.stringify(newTask));
		if (!!this.onCountChanged)
			this.onCountChanged(browserStore.length);
		return newTask;
	}

	function toggleTaskCompletionInStorage(taskId){
		var taskAsString = browserStore.getItem(taskId);
		var task = JSON.parse(taskAsString);
		task.isCompleted = !task.isCompleted;
		//task.toggleCompletion();
		browserStore.setItem(taskId,JSON.stringify(task));
	}

	function removeTaskFromStorage(taskId){
		browserStore.removeItem(taskId);
		if (!!this.onCountChanged)
			this.onCountChanged(browserStore.length);
	}

	
	return {
		addTask : addTaskToStorage,
		removeTask : removeTaskFromStorage,
		getAll : getAllTasksFromStorage,
		toggleCompletion : toggleTaskCompletionInStorage,
		onCountChanged : undefined
	};

}
