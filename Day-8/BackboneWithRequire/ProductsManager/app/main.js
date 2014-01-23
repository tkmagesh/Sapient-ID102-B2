require.config({
	baseUrl:'/lib',
	paths : {
		'models' : '/app/models',
		'collections' : '/app/collections',
		'views' :'/app/views',
		'routes' : '/app/routes',
		'templates' : '/app/templates'
	},
	shim :{
		underscore: {
	      exports: '_'
	    },
	    handlebars : {
	    	exports : 'Handlebars'
	    },
	    backbone: {
	      deps: ["underscore", "jquery"],
	      exports: "Backbone"
	    }
	}
});
require(['jquery',
		'backbone',
		'collections/ProductsCollection',
		'views/ProductsCollectionView'
		],
		function($,Backbone,ProductsCollection, ProductsCollectionView){
		$(function(){
				var products = new ProductsCollection();
				var productsView = new ProductsCollectionView({
					collection : products
				});

				productsView.render().$el.appendTo(document.body);
				Backbone.history.start();
			});

		}
);
