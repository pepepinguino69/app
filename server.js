
const express = require("express");
const productsRouter = require("./routes/routes");

const app = express();
const luxon= require ("luxon")
const { DateTime } = require("luxon");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();
require('crypto').randomBytes(64).toString('hex')->genera el token
//guardado en el .env
const dotenv = require('dotenv');
const  Contenedor  = require('./Contenedor.js').Contenedor

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}


//let datos = DateTime.now().setZone('America/Argentina/Buenos_Aires').toLocaleString({ month: 'long', day: 'numeric',year:'numeric',hour:'numeric',minute:'numeric' })

app.listen(8080,()=>console.log("server listening on port 8080"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.set('view engine', 'pug')
app.use(express.static('public'));
app.use("/api/productos", productsRouter);
app.get('/', (req, res) => res.sendFile(__dirname + '/views/crud.html'))
app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
app.get('/index', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/handlebar1', (req, res) => res.sendFile(__dirname + '/views/handlebar1.html'))



