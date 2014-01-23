define(['backbone'],function(Backbone){
	var ProductModel = Backbone.Model.extend({
		  defaults : {
		     id : undefined,
		     name : "",
		     cost : 0,
		     isDiscontinued : false
		  },
		  discontinue : function(){
		  	this.set('isDiscontinued',true);
		  	this.save();
		  }
		});
	return ProductModel;
});
