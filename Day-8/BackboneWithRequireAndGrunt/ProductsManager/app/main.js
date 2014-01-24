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
console.log('watch testing');
require(['jquery',
		'backbone',
		'routes/appRoute'
		],
		function($,Backbone,AppRoutes){
		$(function(){
				window.routes = new AppRoutes();
				routes.init();
				Backbone.history.start();
			});

		}
);
