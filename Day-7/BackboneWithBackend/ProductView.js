
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
	},
	render : function(){
		this.$el.append(this.compiledTemplate(this.model.toJSON()));
		return this;
	}
});