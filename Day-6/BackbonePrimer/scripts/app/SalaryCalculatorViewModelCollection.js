function SalaryCalculatorViewModelCollection(){
	var _list = [];
	var _onChangeSubscribers = {};

	function triggerChanged(attrName){
		var callbacks = _onChangeSubscribers[attrName] || [];
		for(var i=0;i<callbacks.length;i++){
			callbacks[i]();
		}
	}

	this.addOnChanged = function(attrName, callback){
		if (!_onChangeSubscribers[attrName]) _onChangeSubscribers[attrName] = [];
		_onChangeSubscribers[attrName].push(callback);
	};

	this.add = function(model){
		_list.push(model);
		triggerChanged('added');
	};
	this.remove = function(model){
		var indexOfModel = _list.indexOf(model);
		if (indexOfModel > -1){
			_list.splice(indexOfModel,1);
		}
		triggerChanged('removed');
	};
	this.list = _list;
}