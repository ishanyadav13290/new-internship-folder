import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material"
import s from "./SocialMedia.module.css"
export default function SocialMedia(){
    return <div className={s["main"]}>
    <div className={s["up"]}>
      <button className={s["card1"]}>
        <Instagram />
      </button>
      <button className={s["card2"]}>
        <Facebook/>
        </button>
    </div>
    <div className={s["down"]}>
      <button className={s["card3"]}>
       <YouTube />
      </button>
      <button className={s["card4"]}>
       <LinkedIn />
      </button>
    </div>
  </div>
}