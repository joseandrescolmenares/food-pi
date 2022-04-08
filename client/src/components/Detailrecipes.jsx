import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailrecipes } from "../actions/actions";
import {useNavigate} from "react-router-dom";

export default function Detailrecipes(){
    const navegate =  useNavigate()
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const detailrecipes = useSelector((state) => state.recipes)

    useEffect(() =>{
        dispatch(getDetailrecipes(id))
    },[dispatch,id])
    

     const handleOnclick =() =>{
         navegate('/home')
     }

     

    return(
        <div>
               <button onClick={handleOnclick}> regresar</button>
            {           
               <div>
                  <h1>{detailrecipes.name}</h1> 
                  <img src={detailrecipes.img}alt="img" />
                  <h2>{detailrecipes.diets}</h2>
                  <h2>{detailrecipes.type}</h2>
                  <p>{detailrecipes.summary}</p>
                  <h2>{detailrecipes.score}</h2>
                  <h2>{detailrecipes.level}</h2>

                </div>
            }
        </div>
    )
}