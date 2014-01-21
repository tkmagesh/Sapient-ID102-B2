function SalaryCalculatorViewModel(){
	var _basic = 0
		, _hra = 0
		, _da = 0
		, _tax = 0
		, _salary = 0
		, _onChangeSubscribers = {}
		, _isSalaryCalculatable = false
		, that = this;

	this.addOnChanged = function(attrName, callback){
		if (!_onChangeSubscribers[attrName]) _onChangeSubscribers[attrName] = [];
		_onChangeSubscribers[attrName].push(callback);
	};

	function triggerChanged(attrName){
		var callbacks = _onChangeSubscribers[attrName] || [];
		for(var i=0;i<callbacks.length;i++){
			callbacks[i]();
		}
	}


	this.basic = function(val){
		if (!isNaN(1 * val)) {
			_basic = 1 * val;
			triggerChanged('basic');
			updateIsSalaryCalculatable();

			return;
		}
		return _basic;
	};
	this.hra = function(val){
		if (!isNaN(1 * val)) {
			_hra = 1 * val;
			triggerChanged('hra');
			updateIsSalaryCalculatable();
			return;
		}
		return _hra;
	};
	this.da = function(val){
		if (!isNaN(1 * val)) {
			_da = 1 * val;
			triggerChanged('da');
			updateIsSalaryCalculatable();
			return;
		}
		return _da;
	};
	this.tax = function(val){
		if (!isNaN(1 * val)) {
			_tax = 1 * val;
			triggerChanged('tax');
			updateIsSalaryCalculatable();
			return;
		}
		return _tax;
	};

	this.calculate = function(){
		var gross = this.basic() + this.hra() + this.da(),
			taxToBeDeducted = gross * (this.tax() / 100);
		setSalary(gross - taxToBeDeducted);
	};

	this.isSalaryCalculatable = function(){
		return _isSalaryCalculatable;
	};

	this.salary = function(){
		return _salary;
	}

	function updateIsSalaryCalculatable(){
		_isSalaryCalculatable =  that.basic() !== 0 && that.hra() !== 0 && that.da() !== 0;
		triggerChanged('isSalaryCalculatable');
	}

	function setSalary(val){
		_salary = val;
		triggerChanged('salary');
	}
}