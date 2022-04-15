import React from "react";
import { NavLink } from "react-router-dom";
import style from "./styles/LandingPage.module.css"


export default function LandingPage(){
    return (
        
        <div className={style.centrar}>
           
            <div className={style.inicio}> 
            <h1 className={style.h1}>bienvenidos a mi app</h1>
        
           <NavLink to='/home'>  
           <button className={style.landing}>COMENZAR</button> 
             </NavLink>

        </div>
        </div>
       
    )
}