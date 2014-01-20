require.config({
	baseUrl : "/js/lib",
	paths : {
		'app' : "/js/app"
	}
});
require(['jquery','app/TaskStorage'],function($,taskStorage){
	//var taskStorage = getTaskStorage();
	taskStorage.addCountChanged(displayCount);
	taskStorage.addCountChanged(logCount);
	
	function loadTasksFromStorage(){
		var allTasks = taskStorage.getAll();
		for(var i=0;i<allTasks.length;i++){
			addTaskToUi(allTasks[i]);
		}
		//displayCount();
	}

	
	function onBtnAddTaskClick(){
		var taskName = $("#txtTask").val(),
			newTask = taskStorage.addTask(taskName);

		addTaskToUi(newTask);
		//displayCount();
	}
	

	function addTaskToUi(task){
		$("<li>")
			.html(task.name)
			.attr("task-id",task.id)
			.addClass(task.isCompleted ? "completed" : "")
			.appendTo("#ulTaskList");
	}
	$(function(){
		$("#btnAddTask").on("click",onBtnAddTaskClick);
		$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
		$("#ulTaskList").on("click","li",onTaskItemClick);
		loadTasksFromStorage();
	});

	function onTaskItemClick(e){
		$(this).toggleClass("completed");
		taskStorage.toggleCompletion($(this).attr("task-id"));
	}
	

	function onBtnRemoveCompletedClick(){
		$("#ulTaskList > li.completed").each(function(index,item){
			var $this = $(item);
			var taskId = $this.attr("task-id");
			taskStorage.removeTask(taskId);
			$this.remove();
		});
		//displayCount();
	}

	function displayCount(count){
		$("#spanTaskCount").text(count);
	}

	function logCount(count){
		console.log("The current task count = " , count);
	}
	
	
});