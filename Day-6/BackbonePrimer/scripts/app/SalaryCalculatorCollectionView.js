function SalaryCalculatorCollectionView(templateId,collection){
	var that = this;

	this.init = function(){
		this.$root =$($(templateId).html());
		//event binding to the UI
		this.$root.find("#btnNew").click(onBtnNewClick);
		this.$root.find("#btnSave").click(onBtnSaveClick);

		collection.addSubscriber('added',onNewCalculatorAdded);
		collection.addSubscriber('removed',onCalculatorRemoved);
	};
	var calculatorInContext = undefined;
	function onBtnNewClick(){

		calculatorInContext = new SalaryCalculatorViewModel();
		var calculatorView = new SalaryCalculatorView("#calculatorTemplate",calculatorInContext);
		calculatorView.init();
		that.$root.find("#divSalaryView").html(calculatorView.$root);
	}
	function onBtnSaveClick(){
		collection.add(calculatorInContext);
		
	}
	function onNewCalculatorAdded(newlyAddedCalculator){
		var calculatorEqView = new SalaryCalculatorEqView("#divSalEqTemplate", newlyAddedCalculator);
		calculatorEqView.init();
		that.$root.find("#divSalaryList").append(calculatorEqView.$root);
		console.log("A new calculator model is added to the collection");
	}
	function onCalculatorRemoved(removedCalculator){
		collection.remove(calculator);
	}
}