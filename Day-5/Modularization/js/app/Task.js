define([],function(){
	function Task(name){
		this.id = new Date().getTime().toString();
		this.name = name;
		this.isCompleted = false;
	}
	Task.prototype.toggleCompletion = function(){
		this.isCompleted = !this.isCompleted;
	}
	return Task;
});
