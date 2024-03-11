require('dotenv').config();
const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');

// RUTAS
const v1usuarioRouter = require("./v1/routers/usuarioRoutes");
const v1pacienteRouter = require("./v1/routers/pacienteRoutes"); 
const v1horarioRouter = require("./v1/routers/horarioRoutes");
const v1citasRouter = require("./v1/routers/citasRoutes"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/usuario", v1usuarioRouter);
app.use("/api/v1/paciente", v1pacienteRouter);
app.use("/api/v1/horario", v1horarioRouter); 
app.use("/api/v1/citas", v1citasRouter);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})