const express = require("express");
const morgan = require("morgan");

//configuracion de inicio
const app = express();
app.set("port",3000)
app.listen(app.get("port"));
console.log("servidor iniciado en el puerto: "+app.get("port"));

//midelwares
app.use(morgan("dev"));

// rutas
app.get("/",(req,res) =>{
    res.json()
})