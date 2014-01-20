define(['app/Task'],function(Task){
	
		var browserStore = window.localStorage;
		var countChangeSubscribers = [];
			
		
		function addCountChangeSubscriber(subscriberFn){
			countChangeSubscribers.push(subscriberFn);
		}

		function triggerCountChanged(){
			for(var i=0;i<countChangeSubscribers.length;i++){
				countChangeSubscribers[i](browserStore.length);
			}
		}

		function getAllTasksFromStorage(){
			var tasks = [];
			for(var i=0;i<browserStore.length;i++){
				var taskId = browserStore.key(i);
				var task = JSON.parse(browserStore.getItem(taskId));
				tasks.push(task);
			}
			triggerCountChanged();
			return tasks;
		}

		function addTaskToStorage(taskName){
			var newTask = new Task(taskName);
			browserStore.setItem(newTask.id, JSON.stringify(newTask));
			triggerCountChanged();
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
			triggerCountChanged();
		}

		
		return {
			addTask : addTaskToStorage,
			removeTask : removeTaskFromStorage,
			getAll : getAllTasksFromStorage,
			toggleCompletion : toggleTaskCompletionInStorage,
			addCountChanged : addCountChangeSubscriber
		};

	});


