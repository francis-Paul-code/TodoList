const { response } = require("express");
const express =  require("express");
const path = require("path");
const app = express();

 app.get('/', function(request, response){
     response.sendFile(path.join(__dirname, 'src','index.html'));
 })
 app.use(express.static('src'));

app.listen(3040, function(){
    console.log("Server is Running")
}); 

