import React from "react";
import style from "./styles/Card.module.css"

export default function Card({name, img, Diets, score}){
  
    
    console.log(Diets)
    return(
        <div className={style.Card}>
            <img className={style.img} src={img} alt="img" />
            <h2 className={style.h1}>{name}</h2>
            <h4 className={style.dieta}>{Diets.join(" ")}</h4>
            <h2>{score}</h2>
            
        </div>
    )

}