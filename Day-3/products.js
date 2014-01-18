var products = [
	{id:2,name:"pen",cost:72,units:2,category:1,discount:0.5},
	{id:4,name:"len",cost:82,units:9,category:2,discount:0.75},
	{id:1,name:"den",cost:25,units:3,category:1,discount:0.25},
	{id:3,name:"ten",cost:76,units:9,category:1,discount:0.1},
	{id:8,name:"ken",cost:12,units:6,category:2,discount:0.2},
	{id:5,name:"hen",cost:90,units:7,category:1,discount:0.3}
]

function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (result > list[i][attrName])
			result = list[i][attrName];
	return result;
}

function min(list,attrSelectorFn){
	var result = attrSelectorFn(list[0]);
	for(var i=1;i<list.length;i++)
		if (result > attrSelectorFn(list[i]))
			result = attrSelectorFn(list[i]);
	return result;
}

function idSelector(p){ return p.id; }

console.log(min(products,idSelector));

function filter(list,isSatisfiedBy){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (isSatisfiedBy(list[i]))
			result.push(list[i]);
	return result;
}

function isACostlyProduct(p){
	return p.cost > 50;
}

function every(list,criteriaFn){
  for(var i=0;i<list.length;i++)
     if (!criteriaFn(list[i])) return false;
  return true;
}

function some(list,criteriaFn){
  for(var i=0;i<list.length;i++)
     if (criteriaFn(list[i])) return true;
  return false;
}

function groupBy(list, keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		if (typeof result[key] === "undefined") result[key]= [];
		result[key].push(list[i]);
	}
	return result;
}

var groupedProducts = groupBy(products,function(p){ return p.category;})

var costBasedGrouping = groupBy(products,function(p){
   return p.cost > 50 ? "costly" : "cheap";
});

function countBy(list, keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		if (typeof result[key] === "undefined") result[key]= 0;
		result[key]++;
	}
	return result;
}

function keys(obj){
  var result = [];
  for(var key in obj) result.push(key);
  return result;
}

function values(obj){
  var result = [];
  for(var key in obj) result.push(obj[key]);
  return result;
}

function pairs(obj){
	var result = [];
	for(var key in obj) result.push(new Array(key, obj[key]));
	return result;
}

function inverse(obj){
	var result = {};
	for(var key in obj) result[obj[key]] = key;
	return result;
}

