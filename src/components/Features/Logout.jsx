import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";

export default function Logout(){
    let {setAuth, setIsSeller, setUserID, setCart, setWalletBalance,setUserName,
        setUserEmail,
        setUserAddress,
        setAllSellerItems,
        setUserGender,
        setUserPhone,
        setUserOrders} = useContext(AuthContext)

        setAuth(false);
        setIsSeller(false)
        setUserID("")
        setUserEmail("")
        setUserAddress("")
        setCart([])
        setWalletBalance(0)
        setUserName("")
        setAllSellerItems([])
        setUserGender("other")
        setUserPhone(1234567890)
        setUserOrders([])

        // localStorage.setItem(`userName`, JSON.stringify(""));
        // localStorage.setItem(`isAuth`, JSON.stringify(false));
        // localStorage.setItem(`userID`, JSON.stringify(""));
        // localStorage.setItem(`cart`, JSON.stringify([]));
        // localStorage.setItem(`isSeller`, JSON.stringify(false));
        // if (isSeller)
        //   localStorage.setItem(
        //     `allSellerItems`,
        //     JSON.stringify([])
        //   );
    
}