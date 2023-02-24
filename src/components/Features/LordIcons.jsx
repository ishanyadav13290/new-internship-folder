
import Lottie from "lottie-web"
import { defineElement } from "lord-icon-element"
defineElement(Lottie.loadAnimation);
export function LordHeart(){
    return <lord-icon
    src="https://cdn.lordicon.com/rjzlnunf.json"
    trigger="loop"
    stroke="30"
    colors="secondary:black"
    style={{width:"80px",height:"80px"}}
    >
</lord-icon>
}

export function LordTarget(){
    return <lord-icon
    src="https://cdn.lordicon.com/iltqorsz.json"
    colors="secondary:black"
    trigger="loop"
    style={{width:"60px",height:"60px"}}
    >
</lord-icon>
}
export function LordBag(){
    return <lord-icon
    src="https://cdn.lordicon.com/fyhanzjw.json"
    trigger="loop"
    colors="secondary:black"
    style={{width:"60px",height:"60px"}}
    >
</lord-icon>
}

export function LordCart(){
    return <lord-icon
    src="https://cdn.lordicon.com/udbbfuld.json"
    trigger="hover"
    colors="primary:#ffffff"
    style={{width:"25px",height:"25px"}}>
</lord-icon>
}

export function LordClock(){
    return <lord-icon
    src="https://cdn.lordicon.com/kbtmbyzy.json"
    trigger="loop"
    colors="primary:#121331,secondary:black"
    style={{width:"60px",height:"60px"}}
    >
</lord-icon>
}

export function LordGrowth(){
    return <lord-icon
    src="https://cdn.lordicon.com/gqdnbnwt.json"
    trigger="loop"
    colors="primary:#121331,secondary:#000000"
    style={{width:"200px",height:"200px"}}>
</lord-icon>
}
export function LordAccount(){
   return <lord-icon
   src="https://cdn.lordicon.com/hbvyhtse.json"
   trigger="hover"
   colors="primary:#ffffff"
   style={{width:"25px",height:"25px"}}>
</lord-icon>
}