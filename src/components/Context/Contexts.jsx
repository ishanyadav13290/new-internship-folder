import { createContext, useState } from "react";

export let AuthContext = createContext();

export default function ContextProvider({ children }) {
  let [isAuth, setAuth] = useState((JSON.parse(localStorage.getItem("isAuth")) || false));
  let [cart, setCart] = useState((JSON.parse(localStorage.getItem("cart")) || []));
  let [userName, setUserName] = useState((JSON.parse(localStorage.getItem("userName")) || ""));
  let [userID, setUserID] = useState((JSON.parse(localStorage.getItem("userID")) || ""));
  let [walletBalance, setWalletBalance] = useState((JSON.parse(localStorage.getItem("walletBalance")) || 10000));
  let [isSeller, setIsSeller]= useState((JSON.parse(localStorage.getItem("isSeller")) || false))
  let [userEmail, setUserEmail] = useState((JSON.parse(localStorage.getItem("userEmail")) || ""))
  let [userPassword, setUserPassword] = useState("")
  let [total, setTotal] = useState(0)
  let [userAddress, setUserAddress] = useState("")
  let [allSellerItems, setAllSellerItems] = useState((JSON.parse(localStorage.getItem("allSellerItems")) || new Array(16).fill({
    "id": "lksadjf;lasdj;lfaksjdfkdflakfsd",
    "name": "kjsajdflajsdla;kjdf",
    "description": "kljasdhflajsd",
    "address": "asfdasdfasdf",
    "price": 659087,
    "Img": "imgdata",
    "category": "Angles"
    })))
  let [isInputSearch, setIsInputSearch] = useState(false)
  let value = {
    isAuth,
    setAuth,
    cart,
    setCart,
    userName,
    setUserName,
    userID,
    setUserID,
    walletBalance,
    setWalletBalance,
    isSeller,
    setIsSeller,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    total, setTotal,
    userAddress, setUserAddress,
    allSellerItems,
    setAllSellerItems,
    isInputSearch, 
    setIsInputSearch
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
