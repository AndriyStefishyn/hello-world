//Task 1
var http = require("http");
var path = require("path");
var os = require("os"); 
var fileName = path.basename()
var directoryPath = path.dirname()
var windorVersion = os.version();
var timeOfPCOn = os.uptime();
var username = Object.values(os.userInfo());   


http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end(`System current username: ${(username)[2]},  
OS Type: ${windorVersion},
Current system worktime: ${(timeOfPCOn)}, 
Current work directory: ${directoryPath}
Server filename: ${fileName}, `);
 }).listen(5000);
 
 