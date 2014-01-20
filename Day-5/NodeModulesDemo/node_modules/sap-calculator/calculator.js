function add(x,y){
	return x +y;
}
function subtract(x,y){
	return x - y;
}
function multiply(x,y){
	return x * y
}
var calculator = {
	add : add,
	subtract : subtract,
	multiply : multiply
}
exports.calculator = calculator;