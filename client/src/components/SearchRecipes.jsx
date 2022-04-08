import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../actions/actions";
import style from "./styles/SearchRecipes.module.css"



export default function SearchRecipes(){
        const dispatch = useDispatch()
        const [name, setName] = useState("")

        const handleName = (e) =>{
            setName(e.target.value)
           
        }

        const hadleOnclick = () => {
            if(name === ''){
                alert('no se puede mandar')
            }
           dispatch(getRecipesName(name))
            setName('')
        }

    return(
        <div className={style.buscar}>
          
            <input className={style.input} type="text" placeholder="buscar..." onChange={(e) => handleName(e)} />
            <button className={style.inputBuscar} type="submit" onClick={ () => hadleOnclick()}>Buscar</button>
        </div>
    )
}