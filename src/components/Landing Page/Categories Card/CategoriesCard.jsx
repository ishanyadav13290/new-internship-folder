
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Contexts";
import s from "./CategoriesCard.module.css"

export default function Cards({ name, image, fit, category }) {
  let {setFilterCategory} = useContext(AuthContext)

return <NavLink to="/allitems" className={s["ag-courses_item"]} style={{all:"unset"}}>
  <div className={s["ag-courses_item"]} onClick={()=>{
    setFilterCategory(category)
  }}>
    <div className={s["ag-courses-item_link"]}>
      <div className={s["ag-courses-item_bg"]}></div>
      <div className={s["ag-courses-item_title"]}>
       {name}
      </div>
    </div>
  </div>
</NavLink>

return <div className={s["ag-courses_item"]} onClick={()=>{
  setFilterCategory(category)
}}>
  <div className={s["ag-courses-item_link"]}>
    <div className={s["ag-courses-item_bg"]}></div>
    <div className={s["ag-courses-item_title"]}>
     {name}
    </div>
  </div>
</div>

// </div>
{/* <div className={s["ag-format-container"]}>
<div className={s["ag-courses_box"]}></div>
</div> */}
}
