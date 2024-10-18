const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("Mercado_Pago", Mercado_Pago);


//Importacion de rutas

const Mercado_Pago = require("./src/router/Mercado_Pago_Router");


app.listen(5174, () => {
    console.log("corriento en puerto 5174");
})
