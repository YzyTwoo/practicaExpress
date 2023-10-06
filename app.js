let express = require('express')
let app = express()
let path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
    console.log(__dirname);
})

app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname, '/views/babbage.html'))
    console.log(__dirname);
})

app.get('/berners-lee', function(req, res){
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
    console.log(__dirname)
})
app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
    console.log(__dirname)
})

app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
    console.log(__dirname)
})

<<<<<<< HEAD
app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
    console.log(__dirname)
})

app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
    console.log(__dirname)
})
=======
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 29d496c895f8c1c7faab513dbfb15a08b14f2204

app.listen(3030,()=>{
    console.log("Servidor en marcha!");
})
