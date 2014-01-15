(function(){
	var taskStorage = window.localStorage;

	function loadTasksFromStorage(){
		for(var i=0;i<taskStorage.length;i++){
			var taskId = taskStorage.key(i);
			var taskName = taskStorage.getItem(taskId);
			addTaskToUi(taskId,taskName);
		}
	}
	function onBtnAddTaskClick(){
		var taskName = $("#txtTask").val(),
			taskId = new Date().getTime().toString();

		addTaskToUi(taskId,taskName);
		window.localStorage.setItem(taskId,taskName);
	}
	function addTaskToUi(taskId,taskName){
		$("<li>")
			.html(taskName)
			.attr("task-id",taskId)
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
	}

	function onBtnRemoveCompletedClick(){
		$("#ulTaskList > li.completed").each(function(index,item){
			var $this = $(item);
			var taskId = $this.attr("task-id");
			window.localStorage.removeItem(taskId);
			$this.remove();
		});
	}

	
})();