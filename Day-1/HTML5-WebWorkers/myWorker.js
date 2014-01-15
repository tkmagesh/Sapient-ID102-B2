function doWork(){
	for(var i=0;i<10000;i++)
		for(var j=0;j<10000;j++)
			for(var k=0;k<100;k++)
			{}
}

self.addEventListener("message",function(msgEvt){
	if (msgEvt.data.type === "start"){
		doWork();
		self.postMessage({type :"done",completedAt : new Date()});
	}
})