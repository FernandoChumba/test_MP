const {router} = require("express");

const Mercado_Pago = router();


Mercado_Pago.post("/", async (req, res) => {
    try{

    }catch (error) {
        console.error(error.message);
        res.status(500).json.(error.message);
    }
})



Module.export = Mercado_Pago;