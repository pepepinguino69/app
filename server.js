
//const express = require("express");
//const productRouter = require("routes/routes");
//const app = express();
//app.listen(8080,()=>console.log("server listening on port 8080"));
//app.use(express.json());
//app.use(express.urlencoded({extended:true}));
//app.use("/api/productos", productRouter);

// posibles rutas


const express = require("express");
const productRouter = require("./routes/routes");

const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/productos", productRouter);



