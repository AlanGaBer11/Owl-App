require('dotenv').config();
const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');

const cors = require('cors');

// RUTAS
const v1usuarioRouter = require("./v1/routers/usuairoRoutes");
const v1pacienteRouter = require("./v1/routers/pacienteRoutes");
const v1clinicaRouter = require("./v1/routers/clinicaRoutes");
const v1profesionalRouter = require("./v1/routers/profesionalRoutes");
const v1horarioRouter = require("./v1/routers/horarioRoutes");
const v1citaRouter = require("./v1/routers/citaRoutes");
const v1historialRouter = require("./v1/routers/historialRoutes");
const v1contactoRouter = require("./v1/routers/contactoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(bodyParser.json());
app.use("/api/v1/usuario", v1usuarioRouter);
app.use("/api/v1/paciente", v1pacienteRouter);
app.use("/api/v1/clinica", v1clinicaRouter);
app.use("/api/v1/profesional", v1profesionalRouter);
app.use("/api/v1/horario", v1horarioRouter);
app.use("/api/v1/cita", v1citaRouter);
app.use("/api/v1/historial", v1historialRouter);
app.use("/api/v1/contacto", v1contactoRouter);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})