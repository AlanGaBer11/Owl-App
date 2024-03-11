require('dotenv').config();
const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');

// RUTAS
const v1usuarioRouter = require("./v1/routers/usuairoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/usuario", v1usuarioRouter);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})