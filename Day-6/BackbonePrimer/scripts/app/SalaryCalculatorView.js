function SalaryCalculatorView(templateId,model){
	var calculator = model;
	this.$root = $("<div>");
	var $txtBasic
		, $txtHra
		, $txtDa
		, $spanTax
		, $btnCalculate
		, $rangeTax
		, $divResult;
	

	function init(){
		var template = $(templateId).html();
		this.$root = $(template);	
		$txtBasic = this.$root.find("#txtBasic");
		$txtHra = this.$root.find("#txtHra");
		$txtDa = this.$root.find("#txtDa");
		$rangeTax = this.$root.find("#rangeTax");
		$spanTax = this.$root.find("#spanTax");
		$btnCalculate = this.$root.find("#btnCalculate");
		$divResult = this.$root.find("#divResult");

		$txtBasic.change(onTxtBasicChange);
		$txtHra.change(onTxtHraChange);
		$txtDa.change(onTxtDaChange);
		$rangeTax.change(onRangeTaxChange);

		$btnCalculate.click(onBtnCalculateClick);

		calculator.addOnChanged('basic',onBasicChanged);
		calculator.addOnChanged('hra',onHraChanged);
		calculator.addOnChanged('da',onDaChanged);
		calculator.addOnChanged('tax',onTaxChanged);
		calculator.addOnChanged('salary',onSalaryChanged);
		calculator.addOnChanged('isSalaryCalculatable',updateCalculateButtonState);
	}

	function onBasicChanged(){
		$txtBasic.val(calculator.basic());
	}

	function onHraChanged(){
		$txtHra.val(calculator.hra());
	}

	function onDaChanged(){
		$txtDa.val(calculator.da());
	}

	function updateCalculateButtonState(){
		$btnCalculate.attr("disabled",!calculator.isSalaryCalculatable());
	}

	function onTxtBasicChange(){
		calculator.basic(this.value);
	}
	function onTxtHraChange(){
		calculator.hra(this.value);
	}
	function onTxtDaChange(){
		calculator.da(this.value);
	}
	function onRangeTaxChange(){
		calculator.tax(this.value);
	}
	function onBtnCalculateClick(){
		calculator.calculate();
	}
	function onSalaryChanged(){
		$divResult.html(calculator.salary());
	}
	function onTaxChanged(){
		$rangeTax.val(calculator.tax());
		$spanTax.text("[{tax}%]".replace("{tax}",calculator.tax()));
	}
	this.init = init;
}