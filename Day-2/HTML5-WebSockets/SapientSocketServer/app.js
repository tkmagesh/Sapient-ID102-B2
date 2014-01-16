var ws = require("nodejs-websocket")
var connections = {};
var server = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
    	var msg = JSON.parse(str);
    	if (msg.type === "login"){
    		var currentUsers = [];
    		for(var userName in connections){
    			currentUsers.push(userName);
    		}
    		connections[msg.loginName] = conn;
    		var responseObj = {
    			type : "loginResponse",
    			currentUsers : currentUsers
    		};
    		conn.sendText(JSON.stringify(responseObj));
    		for(var loginName in connections){
    			if (loginName !== msg.loginName){
    				connections[loginName].sendText(JSON.stringify({
    					type : "login",
    					loginName : msg.loginName
    				}));
    			}
    		}
    	}
    	if (msg.type === "transaction"){
    		var dataToSend = JSON.stringify({
    			type : "transaction",
    			content : msg.content
    		});

    		if (msg.targetName !== "All") {
    			connections[msg.targetName].sendText(dataToSend);
    		} else {
    			server.connections.forEach(function (conn) {
		        	conn.sendText(dataToSend);
		    	});		
    		}
    	}
       
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001);
console.log("Socket server is running.. Press Ctrl+C to stop..!!");