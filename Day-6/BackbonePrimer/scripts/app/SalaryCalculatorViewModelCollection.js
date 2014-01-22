function SalaryCalculatorViewModelCollection(){
	var _list = [];
	var _onChangeSubscribers = {};
	var that = this;
	
	function triggerChanged(attrName,argListAsArray){
		var callbacks = _onChangeSubscribers[attrName] || [];
		for(var i=0;i<callbacks.length;i++){
			callbacks[i].apply(this,argListAsArray);
		}
	}

	this.addSubscriber = function(attrName, callback){
		if (!_onChangeSubscribers[attrName]) _onChangeSubscribers[attrName] = [];
		_onChangeSubscribers[attrName].push(callback);
	};

	this.add = function(model){
		_list.push(model);
		model.addOnChanged('destroy',onModelDestroyed);
		triggerChanged('added',[model]);
	};
	function onModelDestroyed(model){
		that.remove(model);
	}
	this.remove = function(model){
		var indexOfModel = _list.indexOf(model);
		if (indexOfModel > -1){
			_list.splice(indexOfModel,1);
		}
		triggerChanged('removed',[model]);
	};
	this.list = function(){
		return _list;	
	};
}