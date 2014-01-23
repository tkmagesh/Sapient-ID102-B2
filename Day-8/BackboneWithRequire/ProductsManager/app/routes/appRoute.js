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
			}
		});