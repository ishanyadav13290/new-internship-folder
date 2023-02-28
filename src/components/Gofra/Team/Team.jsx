
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { lb } from "../../Static/theme"
import s from "./team.module.css"
export default function Team(){
  let images=["https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY","https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY","https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY"]
  //   return <Box minHeight={"100vh"} className={s.mainContainer} mt={"-10%"} p={"10% 0 0 0"}>
  //       <section className={s.team}>
  //   <h2 className={s["section-heading"]}>Our Team</h2>
  //   <div className={s.container}>
  //     {images.map((el,i)=>{
  //       return <div key={i} className={s.profile}>
  //       <img src="https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY" alt=""/><span className={s.name} >Sumit Saurabh</span>
  //     </div>
  //     })}
  //   </div>
  // </section>
  //   </Box>

    return <>
    <Typography className={s["section-heading"]} fontWeight={700} variant="h3">Our Team</Typography>
      <div className={s["ag-offer-block"]}>
    <div className={s["ag-format-container"]}>
      <ul className={s["ag-offer_list"]}>
        {images.map((el,i)=>{
          return <li key={i} className={s["ag-offer_item"]}>
          <div className={s["ag-offer_visible-item"]}>
            <div className={s["ag-offer_img-box"]}>
              <img src="https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY" className={s["ag-offer_img"]} alt=""  />
            </div>
            <div className={s["ag-offer_title"]} style={{fontWeight:700, color:lb}}>
              Sumit Saurabh
            </div>
          </div>
          <div className={s["ag-offer_hidden-item"]}>
            <p className={s["ag-offer_text"]}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </li>
        })}
      </ul>
    </div>
  </div>
    </>
}