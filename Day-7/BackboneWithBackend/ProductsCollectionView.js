var ProductsCollectionView = Backbone.View.extend({
			template : "#productsListTemplate",
			events : {
			},
			initialize : function(){
				this.listenTo(this.collection,"add",this.render);
				//this.listenTo(this.collection,"all",this.showWhat);
				var source   = $(this.template).html();
				this.compiledTemplate = Handlebars.compile(source);
				this.collection.fetch();
			},
			showWhat : function(){
				console.log(arguments[0],arguments);
			},
			render : function(){
				var that = this;
				this.$el.html(this.compiledTemplate({}));
				var table = this.$("table");
				this.collection.each(function(m){
					var prodView = new ProductView({model : m});
					table.append(prodView.render().$el);
				});
				this.$("#spanTotal").text(this.collection.length);
				this.$("#spanDiscontinued").text(this.collection.filter(function(m){
					return m.get('isDiscontinued');
				}).length);
				return this;
			},
			showDiscontinued : function(){
				this.collection.each(function(m){
					m.trigger('visibility','discontinued');
				});
			},
			showAll : function(){
				this.collection.each(function(m){
					m.trigger('visibility','all');
				});
			},
			showActive : function(){
				this.collection.each(function(m){
					m.trigger('visibility','active');
				});
			},
		});
