import React from "react";


export default function Card({name, img, diets}){

    return(
        <div>
            <h1>{name}</h1>
            <h4>{diets}</h4>
            <img src={img} alt="img" />
        </div>
    )

}