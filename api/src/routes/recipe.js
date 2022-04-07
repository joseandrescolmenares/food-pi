const { Diets, Recipes } = require("../db");
const { Router } = require('express');
const { agregarRecipe } = require('./constroller/recipe');
const router = Router();



router.post("/", async (req, res) =>{
    
    const {name, summary, level, score, steps,  namedi } = req.body;
    res.status(200).json(agregarRecipe({name, summary, level, score, steps,  namedi }))
})

    
   


module.exports = router;