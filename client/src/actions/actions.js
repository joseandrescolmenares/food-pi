import axios from 'axios'



export function getRecipes(offset, limit){
    return async function(dispatch){
        try{ 
            let resul = offset !== undefined && limit !== undefined ?  await axios.get(`http://localhost:3001/recipes?offset=${offset}&limit=${limit}`) :  await axios.get('http://localhost:3001/recipes');
            console.log(resul.data)
        return dispatch({
            type: 'GET_RECIPES',
            payload: resul.data
          })
        }catch(error){console.log(error)}
    }
}


export function getRecipesName(name){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        return dispatch({
            type: 'GET_RECIPES_NAME',
            payload: json.data
        })
    }
}


export function getDetailrecipes(id){
    return async function(dispatch){
        let resultado = await axios.get(`http://localhost:3001/recipes/${id}`)
        return dispatch({
            type: 'GET_DETAIL',
            payload: resultado.data
        })
    }
}
 
export function getType(){
    return async function(dispatch){
        let data = await axios.get('http://localhost:3001/types')
        return dispatch({
            type: 'GET_TYPES',
            payload: data.data
        })
    }
}




export function postCreate(payload) {
    return async function(dispatch){
        let info = await  axios.post('http://localhost:3001/recipe', payload)
        return info
    }
}

export function Filtertypes(payload){
    console.log(payload)
    return {
        type: 'FILTER_TYPE',
        payload
    }
}


export function createfilter(payload){
    return {
        type: "FILTER_CREATE",
        payload
    }
}


export function orderFilter(payload){
    return {
        type: "ORDER_FILTER",
        payload
    }
}

export function filterScore(payload){
    return {
        type: "SCORE_SCORE",
        payload
    }
}

