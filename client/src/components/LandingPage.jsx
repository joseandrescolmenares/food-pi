import React from "react";
import { NavLink } from "react-router-dom";



export default function LandingPage(){
    return (
        <div>
            <h1>bienvenidos a mi app</h1>
        
           <NavLink to='/home'>  
           <button><h1>recipes</h1></button> 
             </NavLink>
        </div>
    )
}