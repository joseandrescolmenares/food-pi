
const { Router } = require('express');
const Recipes = require("./routesRecipes")
const Diets = require("./routesDiets")
const recipe = require("./recipe")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes",  Recipes)
router.use("/types", Diets)
router.use("/recipe", recipe)
// router.use("/:id", Recipes)

module.exports = router;   
