// require("dotenv").config();
const { Router } = require("express");
// const diets = require("../models/diets");
// const { API_KEY } = process.env;
// const axios = require("axios");
const router = Router();
// const { Recipes, Diets } = require("../db");
const {agregardi, mostrardiets} = require("./constroller/Diets")


router.get("/", async (req, res) => {
    await agregardi()
    res.status(200).json( await mostrardiets())
      
  
});
 
  
module.exports = router;

   