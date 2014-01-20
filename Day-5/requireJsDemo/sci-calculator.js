define(['jquery.js','calculator.js'],function(jquery,calculator){
	return {
		sqr : function(x){
			return calculator.multiply(x,x);
		},
		jq : jquery
	}
});