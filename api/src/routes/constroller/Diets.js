require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipes, Diets } = require("../../db");


const agregardi = async () =>{
    try{
    let arreglo = []

    const apiDiets = await axios.get( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
    await apiDiets.data.results.map(e =>{
        e.diets.map(e =>{
            if(!arreglo.includes(e)){
                arreglo.push(e)
                
            }
            
        })
        
    })
    
  
        const dietsDb =  await Diets.findAll()
       if(dietsDb.length === 0){
            arreglo.map(e =>{
                
                const jane = Diets.build({
                     name:e
                    
                })
               
                jane.save()
                
            })
        
        }
  
    }catch(e){console.log(e)}
   
}
 
const mostrardiets = async ()=>{
    await agregardi()
    const dietsDb = await Diets.findAll()
    return await dietsDb
}

module.exports = {agregardi, mostrardiets};