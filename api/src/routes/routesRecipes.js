
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
            Diets: e.diets.map(e => e),
            summary: e.summary,
            score: e.spoonacularScore,
            level: e.weightWatcherSmartPoints,
            type: e.dishTypes.map(el => el),
            

        };
    });

    return apiRecipes
 }catch(error){console.log(error)}
}


const  getDBrecipes = async () => {
    try { 
    return  await Recipes.findAll({
        include:[ { 
            model: Diets,
            atributes:['name'],
         }        
 ]
    })
}catch(error){console.log(error)}

}

const getDBWithFixedDiets = (getDB) => {
    let DBWithFixedDiets = getDB.map((e, i, self) => {
      let diets;
      if(e.dataValues.Diets.length && typeof e.dataValues.Diets[0] !== 'string') {
        diets = e.dataValues.Diets.map(el => el.dataValues.name)
        return {...self[i].dataValues, Diets: diets}
      }
      return self[i].dataValues
    })
    return DBWithFixedDiets
  }

const getAllrecipes = async () =>{
      const getDB = await getDBrecipes();
      console.log(getDB[0].dataValues.Diets)
      const filterDB = getDBWithFixedDiets(getDB)
      const getApi = await getApirecipes();
      const  Totalrecipes = filterDB.concat(getApi);
         return Totalrecipes;

}


    
router.get("/", async (req, res) =>{
    try{ 
        const  recipesTotal = await  getAllrecipes()
        const {limit,offset} = req.query;
        if(offset && limit ){
         const paginateRecipes =  recipesTotal.slice(offset, limit) 
         res.status(200).send(paginateRecipes)
         return
        }



        const name = req.query.name;
       
        if(name) {
           const recipesName =  await recipesTotal.filter(e => e.name.includes(name))
           recipesName.length ?
           res.status(200).send(recipesName) :
           res.status(404).send('no se encuentra ninguna receta')
    
        }else {
            res.status(200).send(recipesTotal)
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