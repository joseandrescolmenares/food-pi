import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRecipes } from "../actions/actions";
import { useState } from "react";
import Card from "../components/Card";

export default function Home(){

    const dispatch = useDispatch()
    const  allRecipes = useSelector((state) => state.recipes)
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
            
            {
                allRecipes && 
                allRecipes.map(el => {
                    return (
                        
                    <Card  name={el.name}  img={el.img} diets={el.diets}  key={el.id}/>
                     )
                })
            }
            <button disabled={offset<= 0} onClick={handlePrev}>prev</button>
            <button disabled={limit >= 100} onClick={handleNext}>next</button>
           
        </div>
     )

}