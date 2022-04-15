import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailrecipes } from "../actions/actions";
import style from './styles/Detailrecipes.module.css';
import Loanding from './Loanding'

export default function Detailrecipes(){
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const detailrecipes = useSelector((state) => state.recipes)
    const loanding = useSelector((state) => state.loanding)

    useEffect(() =>{
        dispatch(getDetailrecipes(id))
    },[dispatch,id])
    

    

    return(
        <div>{loanding?<div className={style.loadingcen}><Loanding/></div> : 
        <div className={style.detail}>
              
            {           
               <div className={style.card}>
                   <a  href="/home"><button className={style.boton} > regresar</button></a>
                  <h1 className={style.h1}>{detailrecipes.name}</h1> 
                  <img className={style.img} src={detailrecipes.img ? detailrecipes.img : "https://www.cuerpomente.com/medio/2022/03/04/recetas-frias-veganas_0de24069_1200x630.jpg"}/>
                  <h2 className={style.h1}> Dietas : {detailrecipes.Diets}</h2>
                  <p >{detailrecipes.summary && detailrecipes.summary.replace(/(<([^>]+)>)/gi, "")}</p>
                  <h2>{detailrecipes.steps}</h2>
                  <h2 className={style.h1}>Puntaje : {detailrecipes.score}</h2>
                  <h2 className={style.h1}>Nivel : {detailrecipes.level}</h2>
                  
                </div>
            }
            
        </div>
        } </div>
    )
 }