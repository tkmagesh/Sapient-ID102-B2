function PubSub(){
	var subscribers = {};
	this.subscribe = function(evtName,callbackFn){
		if (!subscribers[evtName]) subscribers[evtName] = [];
		var evtSubscribers = subscribers[evtName];
		var subscriberFound = false;
		for(var i=0;i<evtSubscribers.length;i++){
			if (evtSubscribers[i] == callbackFn) {
				subscriberFound = true;
				break;
			}
		}
		if (!subscriberFound)
			subscribers[evtName].push(callbackFn);
	};
	this.publish = function(evtName,argList){
		argList = argList || [];
		if (!!subscribers[evtName]){
			var evtSubscribers = subscribers[evtName];
			for(var i=0;i<evtSubscribers.length;i++)
				setTimeout((function(x){
					return function(){
						evtSubscribers[x].apply(this,argList);
					}
				})(i));
		}
	}
}