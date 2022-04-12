

const initialState = {
    recipes: [],
    allrecipes: [],
    types: []
    
}


function rootReducer( state = initialState, action){
  switch(action.type){
      case 'GET_RECIPES':
          return{ 
              ...state,
                 recipes: action.payload,
                 allrecipes: action.payload
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

    case 'FILTER_TYPE':
        const allrecipes = state.allrecipes
        const filterRecipe =  allrecipes.filter(el => el.Diets.includes(action.payload)) 
       console.log(filterRecipe)
        return{
            ...state,
                recipes: action.payload ==="All"? allrecipes : filterRecipe
        }


    case "FILTER_CREATE":
        const Allrecipes = state.allrecipes
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