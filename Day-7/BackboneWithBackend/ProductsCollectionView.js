var ProductsCollectionView = Backbone.View.extend({
			template : "#productsListTemplate",
			events : {
				"click #btnLoadProducts" : "loadProducts"
			},
			initialize : function(){
				this.listenTo(this.collection,"all",this.render);
				var source   = $(this.template).html();
				this.compiledTemplate = Handlebars.compile(source);
				this.collection.fetch();
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
			loadProducts : function(){
				this.collection.fetch();
			}
		});
