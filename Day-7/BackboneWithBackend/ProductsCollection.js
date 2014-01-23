var ProductsCollection = Backbone.Collection.extend({
		   model : ProductModel,
		   url : "http://localhost:8081/products"
		});