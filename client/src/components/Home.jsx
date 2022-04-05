import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRecipes } from "../actions/actions";
import { useState } from "react";
import Card from "../components/Card";
import style from "./styles/Home.module.css"
import { Link } from "react-router-dom";


export default function Home(){

    const dispatch = useDispatch()
    const  allRecipe = useSelector((state) => state.recipes)
    const  [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(9)
  
    useEffect(() =>{
        dispatch(getRecipes(offset, limit));
    },[dispatch, limit, offset])


    const handlePrev = () =>{
        setOffset(offset - 9)
        setLimit(limit - 9)
      }

      const  handleNext = () =>{
          setOffset(offset + 9)
        setLimit(limit + 9)
      }

     
     

    return(
            <div> 
             <div className={style.input}>
              <button className={style.boton} disabled={offset<= 0} onClick={handlePrev}>atras</button>
            
         <div className={style.order}>

            {
                allRecipe && 
                allRecipe.map(el => {
                    return ( 
                          
                    <Link to={`/home/${el.id}`}>
                    <Card  name={el.name}  img={el.img} diets={el.diets}  />
                   </Link>  
                     )
                })
            }
        </div>
        <button disabled={limit >= 100} onClick={handleNext}>siguiente</button>  
        </div>
        </div>
     )

}