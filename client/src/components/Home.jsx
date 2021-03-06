import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes,  Filtertypes, createfilter, orderFilter, filterScore} from "../actions/actions";
import Card from "../components/Card";
import style from "./styles/Home.module.css"
import { Link } from "react-router-dom";
import SearchRecipes from "./SearchRecipes";
import NoResult from "./NoResult"
import Loanding from "./Loanding"

export default function Home(){

    const dispatch = useDispatch()
    const allRecipe = useSelector((state) => state.recipes)
   const loanding = useSelector((state) => state.loanding)

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(9)
    const [orden, setOrden] = useState('')
    const [score, setScore] = useState('')
    const [type, setType] = useState('')
    
  
    useEffect(() =>{
        dispatch(getRecipes(offset, limit));
      
    },[dispatch, limit, offset, ])


    const handlePrev = () =>{
        setOffset(offset - 9)
        setLimit(limit - 9)
      }

      const handleNext = () =>{
          setOffset(offset + 9)
        setLimit(limit + 9)
      }


      const handleFiltertypes = (e) =>{
        dispatch(Filtertypes(e.target.value))
        setType(`${e.target.value}`)
        
      }

      const handlecreatefilter = (e) =>{
          dispatch(createfilter(e.target.value))
      }

      const handleorder = (e) =>{
        e.preventDefault()
        dispatch(orderFilter(e.target.value))
        setOrden(`${e.target.value}`)
      }

      const handleScore = (e) => {
        dispatch(filterScore(e.target.value))
        setScore(`${e.target.value}`)
      }

      // const handleScoremayor = (e) =>{
      //   e.preventDefault();
      //   dispatch(scores())
          
      // }
      console.log(allRecipe)
      

    return(
            <div>{ loanding? <div className={style.loadingcen}><Loanding/></div>  :   
            <div className={style.body}>
             

              
             
              <div className={style.create}> 
          <Link to='/recipe'> <button className={style.createboton}>crear tu receta</button> </Link>
              </div>
              <div> 
              <SearchRecipes />
              </div>

              <div className={style.filtrado}>
                <select className={style.select} value={orden} onChange={(e)=> handleorder(e)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Desendente</option>
                </select>
                 {/* <button className={style.select} onClick={(e) => handleScoremayor(e)}>score</button> */}

                
                
                <select className={style.select} value={score} onChange={(e) => handleScore(e)}> 
                
                  <option value="mayor">mayor</option>
                  <option value="menor">menor</option>
                </select>
               
                <select className={style.select} value={type} onChange={(e)=>handleFiltertypes(e)}>
                <option value="All">todos</option>
                <option value="gluten free">gluten free</option>
                <option value="dairy free">dairy free</option>
                <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                <option value="vegan">vegan</option>
                <option value="paleolithic">paleolithic</option>
                <option value="primal">primal</option>
                </select>

                <select className={style.select} onChange={(e) => handlecreatefilter(e)}>
                <option value="All">todos</option>
                <option value="created">creados</option>
                <option value="api">Existentes</option>
                </select>
              </div>


             <div className={style.input}>
              <button className={style.filtradoAtras}  disabled={offset<= 0} onClick={handlePrev}>atras</button>
            
         <div className={style.order}>
        
            {allRecipe.length ?
                allRecipe.map(el => {
                    return ( 
                          
                    <Link className={style.link} to={`/home/${el.id}`}>
                     
                    <Card   key={el.id}  name={el.name}  img={el.img ? el.img : "https://www.cuerpomente.com/medio/2022/03/04/recetas-frias-veganas_0de24069_1200x630.jpg" } Diets={el.Diets}  />
                      </Link> 
                     )
                     
                })
                : <div className={style.noresult}><NoResult /></div>
                
             }
             
        </div>
       
        <button className={style.botonsiguiente} disabled={limit >= 100} onClick={handleNext}>siguiente</button>  
        </div>
        
       
        </div>
       }  </div> 
     )
    
    
}