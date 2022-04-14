

const initialState = {
    recipes: [], // Renderiza
    allrecipes: [], // Inmutable, todos las recetas
    types: []
    
}


function rootReducer( state = initialState, action){
  switch(action.type){
      case 'GET_RECIPES':
          return{ 
              ...state,
                 recipes: [...action.payload],
                 allrecipes: [...action.payload]
    }

    case 'GET_RECIPES_NAME':
        
        return{
            ...state,
                recipes: action.payload
        }

    case 'GET_DETAIL':
        return{
            ...state,
                recipes: action.payload
        }

    case 'GET_TYPES':
        return{
            ...state,
                types: action.payload

        }

    case 'POST_CREATE':
        return{
            ...state
        }

    case 'SCORE':        
        const currentRecipes = [...state.recipes];
        const filtrados = currentRecipes.filter(el => el.score >=98)
        console.log(filtrados)
        return{
            ...state,
            allrecipes: filtrados

        }

    case 'FILTER_TYPE':
        const allrecipes = [...state.allrecipes]
        const filterRecipe =  allrecipes.filter(el => el.Diets.includes(action.payload)) 
        return{
            ...state,
                recipes: action.payload ==="All"? allrecipes : filterRecipe
        }


    case "FILTER_CREATE":
        const Allrecipes = [...state.allrecipes]
        const filtercreate = action.payload === "created" ? Allrecipes.filter(el => el.createBD) : Allrecipes.filter(el => !el.createBD)
        return {
            ...state,
                recipes: action.payload === "All" ? state.allrecipes : filtercreate
        }

    case "ORDER_FILTER":
            let sorter = action.payload === "asc" ?
                state.recipes.sort((a, b) =>{
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }):
                    state.recipes.sort((a, b) =>{
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    })
    
        return {
            ...state,
            recipes: sorter

        }
        case "SCORE_SCORE":
            let orden = action.payload === "mayor"?
            state.recipes.sort((a, b) =>{
                if(a.score > b.score){
                    return 1;
                }
                if(b.score > a.score){
                    return -1;
                }
                return 0;
            }):
            state.recipes.sort((a, b) =>{
                if(a.score > b.score){
                    return -1;
                }
                if(b.score > a.score){
                    return 1;
                }
                return 0;
            })

            return {
                ...state,
                    recipes: orden
            }
     

    default:
        return state;
  }
}

export default rootReducer;