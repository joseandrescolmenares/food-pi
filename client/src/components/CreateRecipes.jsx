import React from "react";
import { useEffect, useState  } from "react";
import { useDispatch,useSelector  } from "react-redux";
import {getType, postCreate} from '../actions/actions'
import {useNavigate} from 'react-router-dom'
import Validator from "./Validator"


 export default function CreateRecipes(){
    const navegetion = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const types = useSelector((state) => state.types)
    const [input, setInput] = useState({
        name:"",
        score:"",
        level: "",
        steps: "",
        summary: "",
        namedi: [],
     
    })
    
    
    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(Validator({
            ...input,
                [e.target.name] : e.target.value
        }))
        console.log(input)

    }


    const hadleCheck = (e) =>{
        if(e.target.checked){
            setInput({
                ...input,
                namedi:[...input.namedi, e.target.value]
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(postCreate(input))
        alert('tu personaje se creo con exitos')
        setInput({
            name:"",
            namedi: [],
            score:"",
            level: "",
            steps: "",
            summary: "",
           
        })
       
        navegetion('/home')
        
    }
    

    useEffect(() =>{
        dispatch(getType())
    },[dispatch])


     return(
         <div>
             <h1>crea tu personaje</h1>
             <form  onSubmit={(e) => handleSubmit(e)}>
                 <div>
                     <label>nombre</label>
                     <input type="text" name="name" value={input.name} onChange={(e)=>handleChange(e)}/>
                     {
                         error.name && (
                            <p>{error.name}</p>
                         
                         )}
                 </div>

                <div>
                    <label>score</label>
                    <input type="number" name="score" value={input.score} onChange={(e)=>handleChange(e)}/>
                    {
                         error.score && (
                            <p>{error.score}</p>
                         
                         )}
                </div>
               
                <div>
                    <label>level</label>
                    <input type="number" name="level" value={input.level} onChange={(e)=>handleChange(e)}/>
                    {
                         error.level && ( 
                            <p>{error.level}</p>
                         
                         )}
                </div>
                <div>
                    <label>steps</label>
                    <input type="text" name="steps" value={input.steps} onChange={(e)=>handleChange(e)}/>
                    {
                         error.steps && ( 
                            <p>{error.steps}</p>
                         
                         )}
                </div>
                <div>
                    <label>summary</label>
                    <input type="text" name="summary" value={input.summary} onChange={(e)=>handleChange(e)}/>
                    {
                         error.summary && ( 
                            <p>{error.summary}</p>
                         
                         )}
                </div>
               
                <div>
                 {
                     types.map(el => {
                         return( 
                            <label>{el.name} <input type="checkbox" name={el.name} value={el.name} onChange={(e)=>hadleCheck(e)}/></label>
                            
                         )
                         
                     })
                     
                 }

                {
                         error.namedi && ( 
                            <p>{error.namedi}</p>
                         
                         )}
                    
                </div>

                <button  type="submit"> Crear personaje</button>


             </form>
         </div>
     )
 }
