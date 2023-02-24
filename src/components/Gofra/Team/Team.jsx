
import { Box } from "@mui/system"
import s from "./team.module.css"
export default function Team(){
  let images=["https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY","https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY","https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY","https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY"]
    return <Box minHeight={"100vh"} className={s.mainContainer} mt={"-10%"} p={"10% 0 0 0"}>
        <section className={s.team}>
    <h2 className={s["section-heading"]}>Our Team</h2>
    <div className={s.container}>
      {images.map((el,i)=>{
        return <div key={i} className={s.profile}>
        <img src="https://media.licdn.com/dms/image/C4D03AQF4K6yffRB7aA/profile-displayphoto-shrink_400_400/0/1657000982122?e=1682553600&v=beta&t=niXwaOoz36Oul1mVQOtcmek3SAgkN14OywQlOhtuILY" alt=""/><span className={s.name} >Sumit Saurabh</span>
      </div>
      })}
    </div>
  </section>
    </Box>
}