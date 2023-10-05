let express = require('express')
let app = express()
let path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
    console.log(__dirname);
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
    console.log(__dirname);
})

app.listen(3030,()=>{
    console.log("Servidor en marcha!");
})
