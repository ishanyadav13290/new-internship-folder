
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Contexts";
import s from "./CategoriesCard.module.css"

export default function Cards({ name, category, brand }) {
  let {setFilterCategory, setBrand} = useContext(AuthContext)
return <NavLink to="/allitems" className={s["ag-courses_item"]} style={{all:"unset"}} >
  <div className={s["ag-courses_item"]} onClick={()=>{
   if (category!==undefined){
    setFilterCategory(category)
   }
   if (brand!== undefined){
    setBrand(brand)
    console.log("hua",brand)
   }
  }}>
    <div className={s["ag-courses-item_link"]}>
      <div className={s["ag-courses-item_bg"]}></div>
      <div className={s["ag-courses-item_title"]}>
       {name}
      </div>
    </div>
  </div>
</NavLink>
}
