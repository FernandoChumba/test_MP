const { router } = require("express");

const mercadopago = require("mercadopago");
//permite usar variables de entorno
const dotenv = require("dotenv");
dotenv.config();

const Mercado_Pago = router();

//configurando mercado pago

mercadopago.configure({
  access_token: process.env.ACCESS_TOKE || "",
});

//ruta mercado pago
Mercado_Pago.post("/", async (req, res) => {
  try {
    const proference = {
    //cada objeto representa un producto
      items: [
        {
          title: "Computadora",
          picture_url: "https://qseyo",
          unit_price: 200,
          currrency_id: "USD",
          description: "descripcions",
          quantity: 1,
        },
      ],
      //ruta por si falla el proceso
      back_urls: {
        sussecs: "",
        fiilure: "",

      },
      //ruta por si sale bien
      auto_return: "aproved",
    };
//promesa para esperas las respuestas

const respuesta = await mercadopago.preference.create(preference);
console.log(respuesta);
res.status(200).json(respuesta);




  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

Module.export = Mercado_Pago;
