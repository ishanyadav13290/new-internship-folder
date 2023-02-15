import { createContext, useState } from "react";

export let AuthContext = createContext();

export default function ContextProvider({ children }) {
  let [isAuth, setAuth] = useState(false);
  let [cart, setCart] = useState([]);
  let [userName, setUserName] = useState("");
  let [userID, setUserID] = useState("")
  let [walletBalance, setWalletBalance] = useState(10000);
  let [isSeller, setIsSeller]= useState(false)
  let [userEmail, setUserEmail] = useState("")
  let [userPassword, setUserPassword] = useState("")
  let [allSellerItems, setAllSellerItems] = useState([])
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
    allSellerItems,
    setAllSellerItems
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
