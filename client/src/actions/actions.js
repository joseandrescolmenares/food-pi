import axios from 'axios'



export function getRecipes(offset, limit){
    return async function(dispatch){
        let resul = offset !== undefined && limit !== undefined ?  await axios.get(`http://localhost:3001/recipes?offset=${offset}&limit=${limit}`) :  await axios.get('http://localhost:3001/recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: resul.data
          })
    }
}