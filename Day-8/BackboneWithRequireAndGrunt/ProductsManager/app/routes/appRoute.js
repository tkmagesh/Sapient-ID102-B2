define(['views/ProductsCollectionView',
	'collections/ProductsCollection',
	'backbone'],
function(ProductsCollectionView,ProductsCollection, Backbone){
	var products = new ProductsCollection();
	var productsView = new ProductsCollectionView({
		collection : products
	});

	var AppRoutes = Backbone.Router.extend({
			routes : {
				'*showWhat' : "show"
			},
			show : function(showWhat){
				switch (showWhat){
					case "all" :
						productsView.showAll();
						break;
					case  "active" :
						productsView.showActive();
						break;
					case "discontinued" :
						productsView.showDiscontinued();
						break;
					default :
						productsView.showAll();
				}
			},
			init : function(){
				productsView.render().$el.appendTo(document.body);
			}
		});
	return AppRoutes;
})
