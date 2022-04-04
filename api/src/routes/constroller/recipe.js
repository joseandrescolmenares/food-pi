const { Diets, Recipes } = require("../../db");

const agregarRecipe = async ({ name, summary, level, score, steps,  namedi}) => {
  try {
    const createDb = await Recipes.create({
      name,
      summary,
      level,
      score,
      steps,
    });
    const ditsDb = await Diets.findAll({
      where: {name: namedi},
     })
    
     await createDb.addDiets(ditsDb);
     return createDb
   

  } catch (error) {
    console.log(error);
  }
};

module.exports = {agregarRecipe}

