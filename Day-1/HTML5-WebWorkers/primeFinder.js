function isPrime(n){
	if (n <= 3) return true;
	for(var i=2;i<=n/2;i++)
		if (n % i == 0) return false;
	return true;
}

function findPrimes(start,end){
	var primeCount = 0;
	var reportInterval = (end - start) / 10;
	for(var i=start;i<=end;i++){
		if (isPrime(i)) primeCount++;
		if (((i - start) % reportInterval) === 0)
			self.postMessage(
				{	
					type : "progress", 
					percentCompleted : ((i - start) / reportInterval) * 10, 
					primeCount : primeCount
				});
	}
}

self.addEventListener("message",function(msgEvt){
	var evtData = msgEvt.data;
	if (evtData.type === "start"){
		findPrimes(evtData.start, evtData.end);
	} else {
		console.warning("unknown message " , msgEvt);
	}
});
