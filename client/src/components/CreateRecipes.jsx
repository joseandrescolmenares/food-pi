import React from "react";
import { useEffect, useState  } from "react";
import { useDispatch,useSelector  } from "react-redux";
import {getType, postCreate} from '../actions/actions'
import {useNavigate} from 'react-router-dom'
import  { isFullFormValid } from "./Validator"
import style from './styles/CreateRecipe.module.css'
import {Link} from 'react-router-dom' 
import {validateFormAndReturnErrorObject} from './Validator'
 
 export default function CreateRecipes(){
    const navegetion = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [button, setButton] = useState(true)
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
   
        setError(validateFormAndReturnErrorObject({
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
        }else{
            const filtereddiet = input.namedi.filter(el => el !== e.target.value)
            setInput({...input, namedi: filtereddiet})
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
        setButton(isFullFormValid(input))
        console.log(isFullFormValid(input), input)
    },[input])

    useEffect(() =>{
        dispatch(getType())
    },[dispatch])


     return(
         <div className={style.centrar} >
             <div> 
           <Link to='/home'>  <button className={style.regresa}>regresar</button></Link>
            
            <div className={style.card}> 
         
             <form className={style.form}  onSubmit={(e) => handleSubmit(e)}>
                 
             <h1 className={style.h1}>crear  tu recetas </h1>
                 <div className={style.form}>
                     <label>nombre</label>
                     <input  type="text" name="name" value={input.name} onChange={(e)=>handleChange(e)}/>
                     {
                         error.name && (
                            <p className={style.error}>{error.name}</p>
                         
                         )}
                 </div>

                <div className={style.form}>
                    <label>score </label>
                    <input type="number" name="score" value={input.score} onChange={(e)=>handleChange(e)}/>
                    {
                         error.score && (
                            <p className={style.error}>{error.score}</p>
                         
                         )}
                </div>
               
                <div className={style.form}>
                    <label>level </label>
                    <input type="number" name="level" value={input.level} onChange={(e)=>handleChange(e)}/>
                    {
                         error.level && ( 
                            <p className={style.error}>{error.level}</p>
                         
                         )}
                </div>
                <div className={style.form}>
                    <label>steps </label>
                    <input type="text" name="steps" value={input.steps} onChange={(e)=>handleChange(e)}/>
                    {
                         error.steps && ( 
                            <p className={style.error}>{error.steps}</p>
                         
                         )}
                </div>
                <div className={style.form}>
                    <label>summary </label>
                    <input type="text" name="summary" value={input.summary} onChange={(e)=>handleChange(e)}/>
                    {
                         error.summary && ( 
                            <p className={style.error}>{error.summary}</p>
                         
                         )}
                </div>
               
                <div className={style.check}>
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

                <button disabled={button}  className={style.boton} type="submit"> Crear</button>


             </form>
             </div>
             </div>
         </div>
     )
 }
