 import React from "react";
 


 const Validator = (input) =>{
     let error = {}
    if(!input.name){
        error.name = 'coloque un nombre'
    }

    if(!input.score){ 
        error.score='coloque una puntuacion'
    }

    if(!input.level){
        error.level ='coloque un nivel'
    }
    if(!input.steps){
            error.steps = 'coloque los pasos'
    }

    if(!input.summary){
        error.summary = 'coloque el resumen de su receta'
    }

    if(input.namedi.length === 0){
        error.namedi = 'agregue un tipo de dieta'
    }

    return error
}


export default Validator;

// namedi: [],
// score:"",
// level: "",
// steps: "",
// summary: "