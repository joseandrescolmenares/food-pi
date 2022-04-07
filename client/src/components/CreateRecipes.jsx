import React from "react";
import { useEffect, useState  } from "react";
import { useDispatch,useSelector  } from "react-redux";
import {getType, postCreate} from '../actions/actions'


 export default function CreateRecipes(){

    const dispatch = useDispatch()

    const types = useSelector((state) => state.types)
  
    const [input, setInput] = useState({
        name:"",
        types: [],
        score:"",
        level: "",
        steps: "",
        summary: "",
        

    })

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)

    }


    const hadleCheck = (e) =>{
        if(e.target.checked){
            setInput({
                ...input,
                types:[...input.types, e.target.value]
            })
        }
    }

    const handleSubmit = ()=>{
        
    }

    useEffect(() =>{
        dispatch(getType())
    },[dispatch])


     return(
         <div>
             <h1>crea tu personaje</h1>
             <form>
                 <div>
                     <label>nombre</label>
                     <input type="text" name="name" value={input.name} onChange={(e)=>handleChange(e)}/>
                 </div>

                <div>
                    <label>score</label>
                    <input type="number" name="score" value={input.score} onChange={(e)=>handleChange(e)}/>
                </div>
               
                <div>
                    <label>level</label>
                    <input type="number" name="level" value={input.level} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>steps</label>
                    <input type="text" name="steps" value={input.steps} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>summary</label>
                    <input type="text" name="summary" value={input.summary} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>image</label>
                    <input type="text" name="image" value={input.image} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                 {
                     types.map(el => {
                         return( 
                            <label>{el.name} <input type="checkbox" name={el.name} value={el.name} onChange={(e)=>hadleCheck(e)}/></label>
                         )
                     })
                 }
                    
                </div>

                <button type="submit"> Crear personaje</button>


             </form>
         </div>
     )
 }
