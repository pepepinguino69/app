// server.js
const express = require("express");

const  Contenedor  = require('./Contenedor.js').Contenedor

productRouter.get("/",(req,res)=>res.send("peticion recibida desde router produyctos")







app.use(express.json())
app.use(express.urlencoded({extended: true}))
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.set('view engine', 'pug')

app.use(express.static('public'))
const myInstance = new Contenedor("productos.txt");
app.use(express.static('public'));
let acum=""

producttRouter.delete('/api/productos/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx).then((data) => res.send(data))});
productRouter.put('/api/productos/:xx', (req, res) => {const { xx } = req.params;myInstance.putById(xx,req.body).then ((data)=> res.send('modificado'))})
app.get('/api/productos/:xx',  (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.json({id:data.id,price:data.price,title:data.title,url:data.url}))})
app.get('/crud.html', (req, res) => res.sendFile(__dirname + '/views/crud.html'))
app.post('/addProduct/', function(req, res){
myInstance.save(req.body)    .then((data) => myInstance.getById(req.body.id).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url})))});
//app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
app.get('/api/productos', (req, res) => myInstance.getAll().then((data) => res.json({data})))


app.get('/productos', (req, res) => {
        myInstance.getAll().then((data)=>
              res.render('card2',{data}))})



const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = productRouter()
