var http = require('http');

const data = require('../utils/data.js');

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*'); //estoy definiendo que cualquier dominio pueda hacer requiest
   
    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').at(-1);  //con split creo un objeto separado desde las / y el at aranco a leer desde el ultimo por el -1
        let character = data.find(char => char.id === Number(id))

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(character))
    }
    
}


).listen(3001, 'localhost');