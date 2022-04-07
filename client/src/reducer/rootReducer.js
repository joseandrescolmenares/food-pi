

const initialState = {
    recipes: [],
    types: []
    
}


function rootReducer( state = initialState, action){
  switch(action.type){
      case 'GET_RECIPES':
          return{ 
              ...state,
                 recipes: action.payload
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

    default:
        return state;
  }
}

export default rootReducer;