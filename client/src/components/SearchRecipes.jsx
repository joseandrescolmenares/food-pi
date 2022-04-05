import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../actions/actions";



export default function SearchRecipes(){
        const dispatch = useDispatch()
        const [name, setName] = useState("")

        const handleName = (e) =>{
            setName(e.target.value)
        }

        const hadleOnclick = () => {
           dispatch(getRecipesName(name))
           
        }

    return(
        <div>
            <input type="text" placeholder="buscar..." onChange={(e) => handleName(e)} />
            <button type="submit" onClick={ () => hadleOnclick()}>Buscar</button>
        </div>
    )
}