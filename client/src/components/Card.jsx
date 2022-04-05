import React from "react";
import style from "./styles/Card.module.css"

export default function Card({name, img, diets}){

    return(
        <div className={style.Card}>
            <h2 className={style.h1}>{name}</h2>
            <h4 className={style.h1}>{diets}</h4>
            <img src={img} alt="img" />
        </div>
    )

}