import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";



const TheMeal = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();
     useEffect(() => {
         (async function fetchwAxios() {
             let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
                 setCategories(response.data.categories)
                 console.log(response.data.categories[2])
                 setLoading(false)
          
         })()
        },[]);
    return loading ? <Spinner/> : ( 
        <>
            <h3>The Meal</h3> 
            {categories.map  (category =>(
                <p key={category.idCategory}>{category.strCategory}</p>
            ))}
        </>
    );
}
 
export default TheMeal;