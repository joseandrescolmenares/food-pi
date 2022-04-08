

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
        const filterRecipe =  action.payload === "All"? allrecipes :  allrecipes.filter(el => el.diets.includes(action.payload))
       console.log(filterRecipe)
        return{
            ...state,
                recipes: filterRecipe
        }


    case "FILTER_CREATE":
        const Allrecipes = state.allrecipes
        const filtercreate = action.payload === "created" ? Allrecipes.filter(el => el.createBD) : Allrecipes.filter(el => !el.createBD)
        return {
            ...state,
                recipes: action.payload === "All" ? Allrecipes : filtercreate
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
     

    default:
        return state;
  }
}

export default rootReducer;