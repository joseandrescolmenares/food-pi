import React from "react";
import style from "./styles/NoResult.module.css"

export  default function NoResult(){
    return(
        <div className={style.center}>
            <h1>No se encontro ninguna receta con ese nombre</h1>
        </div>
    )
}