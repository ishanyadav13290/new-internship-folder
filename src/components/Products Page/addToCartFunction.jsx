import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";

export default function useAddToCart() {
    let {userID,setCart,cart} = useContext(AuthContext)
    if(userID==undefined) return

   return (newItem)=>{
    let tempCartItems = [...cart];
    for (let i = 0; i < tempCartItems.length; i++) {
        if (tempCartItems[i].name == newItem.name) {
            if(tempCartItems[i].qty==4){
                tempCartItems[i].qty = 4;
            } else{
                tempCartItems[i].qty = tempCartItems[i].qty + 1;
            }
            setCart(tempCartItems);
            axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
                cart: tempCartItems
            })
            return
        }
    }

    setCart([...tempCartItems, newItem]);
    axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
        cart: [...tempCartItems, newItem]
    })
   }

  }