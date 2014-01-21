function SalaryCalculatorEqView(templateId,calculator){
	var that = this;
	this.init = function(){

		calculator.addOnChanged('destroy',onModelDestroyed);
		var content = $(templateId).html()
			.replace("{basic}",calculator.basic())
			.replace("{hra}",calculator.hra())
			.replace("{da}",calculator.da())
			.replace("{tax}",calculator.tax())
			.replace("{salary}",calculator.salary());
		this.$root = $(content); 
		this.$root.find("#btnDelete").click(onBtnRemoveClick);
	}
	function onBtnRemoveClick(){
		calculator.destroy();
	}
	function onModelDestroyed(){
			that.$root.remove();
	}
}