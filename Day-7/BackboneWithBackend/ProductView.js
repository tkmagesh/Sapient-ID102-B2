
var ProductView = Backbone.View.extend({
	tagName : "tr",
	template : "#productTemplate",
	events:{
		"click #btnDiscontinue" : "discontinueProduct"
	},
	discontinueProduct : function(){
		this.model.discontinue();
	},
	initialize : function(){
		var source   = $(this.template).html();
		this.compiledTemplate = Handlebars.compile(source);
		this.listenTo(this.model,"change",this.render);
		this.listenTo(this.model,"visibility",this.showHide);
		//this.listenTo(this.model,"all",this.showWhat);
	},
	showWhat : function(){
		console.log(arguments[0],arguments);
	},
	render : function(){
		this.$el.append(this.compiledTemplate(this.model.toJSON()));
		return this;
	},
	showHide : function(what){
		//console.log(this.model.toJSON());
		if (what === "discontinued"){
			if (this.model.get('isDiscontinued')){
				this.$el.show()
			} else {
				this.$el.hide();
			}
		}
		 
		if (what === "all")
			this.$el.show(); //show the product in either case
		if (what === "active"){
			if (this.model.get('isDiscontinued')){
				this.$el.hide()
			} else {
				this.$el.show();
			}
		} 
	}
});