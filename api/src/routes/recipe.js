const { Diets, Recipes } = require("../db");
const { Router } = require('express');
const { agregarRecipe } = require('./constroller/recipe');
const router = Router();



router.post("/", async (req, res) =>{
    
    const {name, summary, level, score, steps,  namedi } = req.body;
    res.status(200).json(agregarRecipe({name, summary, level, score, steps,  namedi }))
})

    // try {
    //     const {
    //       name,
    //       summary,
    //       score,
    //       diets,
    //       steps,
    //       level,
    //     } = req.body;
    //     const newRecipe = await Recipes.create({
    //       name,
    //       summary,
    //       score,
    //       steps,
    //       level,
    //     });
    //     const diet = await Diets.findAll({
    //       where: { name: diets },
    //     });
    
    //     newRecipe.addDiets(diet);
    
    //     // return res.status(200).send("Recipe created succesfully!");
    //     return res.send(newRecipe);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
   


module.exports = router;