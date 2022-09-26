// server.js
const express = require("express");
const luxon= require ("luxon")
const { DateTime } = require("luxon");
const jwt = require('jsonwebtoken');
//require('crypto').randomBytes(64).toString('hex')->genera el token
//guardado en el .env
const dotenv = require('dotenv');


const  Contenedor  = require('./Contenedor.js').Contenedor

const myInstance = new Contenedor("./productos.txt");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
//app.use(express.static('public'));



//let datos = DateTime.now().setZone('America/Argentina/Buenos_Aires').toLocaleString({ month: 'long', day: 'numeric',year:'numeric',hour:'numeric',minute:'numeric' })
const app = express();
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.set('view engine', 'pug')
app.get('/productoRandom',async (req, res) => await myInstance.getById(-1).then((data)=>res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url,nombre:'Ariel Rubel'})))
app.get('/productos/:id', async (req, res) => {const { id } = req.params;await myInstance.getById(id).then((data)=>res.render('card2',{id:data.id,price:data.price,title:data.title,img:data.url,nombre:'Ariel Rubel'}))})


let acum=""
app.get("/productos", (req, res) => {myInstance.getAll().then((data)=>{data.forEach(e=>acum+=`<img src="${e.url}"><h3>${e.id}-${e.title}----${e.price}---</h3>`);res.send(acum)})});

app.get('/json/productos',(req, res) => {myInstance.getAll().then((data) => res.json(data))});
app.get("/index", (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get("/signup", (req, res) => res.sendFile(__dirname + '/views/signup.html'))
//app.get('/productoRandom', (req, res) =>myInstance.getById(-1).then((data) => res.send(`<h3>${data.id}</h3><h3>${data.title}</h3><h3>${data.price}</h3><img src="${data.url}">`)));
app.get('/json/productos/:id', (req, res) => {const { id } = req.params;myInstance.getById(id).then((data) => res.json(data))});
app.get('/json/productoRandom/', (req, res) => {myInstance.getById(-1).then((data) => res.json(data))});
app.use(express.static('public'));
app.get("/", (req, res) => res.sendFile(__dirname + '/views/home.html'))


app.get("/index", (request, response) => {
  response.sendFile("index.html", { root: VIEWS });
});

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
