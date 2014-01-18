function Products(){
	var items = [
		{id:2,name:"pen",cost:72,units:2,category:1,discount:0.5},
		{id:4,name:"len",cost:82,units:9,category:2,discount:0.75},
		{id:1,name:"den",cost:25,units:3,category:1,discount:0.25},
		{id:3,name:"ten",cost:76,units:9,category:1,discount:0.1},
		{id:8,name:"ken",cost:12,units:6,category:2,discount:0.2},
		{id:5,name:"hen",cost:90,units:7,category:1,discount:0.3}
	];
	this.items = items;
	this.sort = function(attrName){
		var that = this;
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				for(var i=0;i<items.length-1;i++)
					for(var j=i+1;j<items.length;j++){
						if (items[i][attrName] > items[j][attrName]){
							var temp = items[i];
							items[i] = items[j];
							items[j] = temp;
						}
					}
				resolve(items);
			},10000)
		});
	}
}