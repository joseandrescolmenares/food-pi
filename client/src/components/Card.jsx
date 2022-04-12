import React from "react";
import style from "./styles/Card.module.css"

export default function Card({name, img, Diets, score}){
  
    
    console.log(Diets)
    return(
        <div className={style.Card}>
            <h2 className={style.h1}>{name}</h2>
            <img className={style.img} src={img} alt="img" />
            <h4 className={style.dieta}>{Diets.join(" ")}</h4>
            <h2>{score}</h2>
            
        </div>
    )

}