
require("dotenv").config();
const { Router } = require('express');
// const diets = require("../models/diets");
const{ API_KEY } = process.env;
const axios = require('axios')
const router = Router();
const { Recipes, Diets } = require("../db");



const getApirecipes  = async ()  =>{
    try { 
    const apiURL = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const apiRecipes = await apiURL.data.results.map(e => {
        return {
            id: e.id,
            name: e.title,
            img: e.image,
            diets: e.diets.map(e => e),
            summary: e.summary,
            score: e.spoonacularScore,
            level: e.weightWatcherSmartPoints,
            type: e.dishTypes.map(el => el),
            // steps: e.analyzedInstruction.map(el => el.steps),

        };
    });

    return apiRecipes
 }catch(error){console.log(error)}
}


const  getDBrecipes = async () => {
    try { 
    return  await Recipes.findAll({
        include:{
            model: Diets,
            atributes:['name'],
            through: {
                atributes: [],
            },

        }
    })
}catch(error){console.log(error)}

}

const getAllrecipes = async () =>{
      const getDB = await getDBrecipes();
      const getApi = await getApirecipes();
      const  Totalrecipes = getDB.concat(getApi);
         return Totalrecipes;

}


    
router.get("/", async (req, res) =>{
    try{ 
        const  recipesTotal = await  getAllrecipes()
        const {limit} = req.query;
        const {offset} = req.query;
        if(offset && limit ){
         const paginateRecipes =  recipesTotal.slice(offset, limit) 
         res.status(200).send(paginateRecipes)
        }



        const name = req.query.name;
       
        if(name) {
           const recipesName =  await recipesTotal.filter(e => e.name.includes(name))
           recipesName.length ?
           res.status(200).send(recipesName) :
           res.status(404).send('no se encuentra ninguna receta')
    
        }else {
            res.status(200)
        }
    
    }catch(error){console.log(error)}
})


router.get("/:id", async (req, res) =>{
    const {id} = req.params;
    const allrecipes = await getAllrecipes()
    const recipesFilter = allrecipes.find(e => e.id == id);

    if(recipesFilter){
        res.status(200).json(recipesFilter);
    }else{
        res.status(404).send("esa receta no existe")
    }


})





module.exports = router;