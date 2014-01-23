var restify = require('restify');
var products = [
	{id : 1, name : "pen", cost : 10, isDiscontinued : false},
	{id : 2, name : "pencil", cost : 20, isDiscontinued : false},
	{id : 3, name : "marker", cost : 30, isDiscontinued : false}
];

function getNextProductId(){
	return products.reduce(function(pv,cv,index,array){
   		return pv.id > cv.id ? pv.id : cv.id;
	},0) + 1;
}

function addProduct(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	var newProduct = {
		id : getNextProductId(),
		name : req.params.name,
		cost : req.params.cost
	};
	products.push(newProduct);
	res.send(newProduct);
	return next();
}

function updateProduct(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	console.log(req.params);
	for(var i=0;i<products.length;i++){
		if (products[i].id === req.params.id) {
			products[i].name = req.params.name;
			products[i].cost = req.params.cost;
			products[i].isDiscontinued = req.params.isDiscontinued;
			res.send(products[i]);
			//break;
		}
	}
	res.send(200);
	return next();
}

function getProductById(id){
	for(var i=0;i<products.length;i++)
		if (products[i].id === id) return products[i];
}

function getAllProducts(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send(products);
	return next();
}

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.bodyParser());

server.get('/products', getAllProducts);
server.post('/products', addProduct);
server.put('/products/:x', updateProduct);

//server.head('/hello/:name', respond);
server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});

