import React from "react";
import { NavLink } from "react-router-dom";
import style from "./styles/LandingPage.module.css"


export default function LandingPage(){
    return (
        <div className={style.centrar}>
            <h1>bienvenidos a mi app</h1>
        
           <NavLink to='/home'>  
           <button><h1>recipes</h1></button> 
             </NavLink>
        </div>
    )
}