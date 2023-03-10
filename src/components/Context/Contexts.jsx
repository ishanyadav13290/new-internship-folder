import { createContext, useState } from "react";
import useAlert from "../AlertPopUp/Alert";

export let AuthContext = createContext();

export default function ContextProvider({ children }) {
  // let [isAuth, setAuth] = useState(false);
  let [cart, setCart] = useState([]);
  let [userName, setUserName] = useState("");
  // let [userID, setUserID] = useState("");
  let [walletBalance, setWalletBalance] = useState(10000);
  let [isSeller, setIsSeller] = useState(false)
  let [userEmail, setUserEmail] = useState("")
  let [Alert,trigger] = useAlert();
  let [isAuth, setAuth] = useState((JSON.parse(localStorage.getItem("isAuth")) || false));
  // let [cart, setCart] = useState((JSON.parse(localStorage.getItem("cart")) || []));
  // let [userName, setUserName] = useState((JSON.parse(localStorage.getItem("userName")) || ""));
  let [userID, setUserID] = useState((JSON.parse(localStorage.getItem("userID")) || ""));
  // let [walletBalance, setWalletBalance] = useState((JSON.parse(localStorage.getItem("walletBalance")) || 10000));
  // let [isSeller, setIsSeller]= useState((JSON.parse(localStorage.getItem("isSeller")) || false))
  // let [userEmail, setUserEmail] = useState((JSON.parse(localStorage.getItem("userEmail")) || ""))
  let [userPassword, setUserPassword] = useState("")
  let [total, setTotal] = useState(0)
  let [userAddress, setUserAddress] = useState("")
  let [userGender, setUserGender] = useState("other")
  let [userPhone, setUserPhone] = useState(1234567890)
  let [userOrders, setUserOrders] = useState([])
  let [verificationItems, setVerificationItems] = useState([])
  let [otp, setOTP] = useState(Number("012345"))
  let [pendingItems, setPendingItems] = useState([]);
  let [isAdmin,setIsAdmin] = useState(JSON.parse(localStorage.getItem("isAdmin")) || false)
  let [allSellerItems, setAllSellerItems] = useState(new Array(16).fill({
    "name": "kjsajdflajsdla;kjdf",
    "description": "kljasdhflajsd",
    "address": "asfdasdfasdf",
    "price": 659087,
    "Img": "imgdata",
    "category": "Angles"
  }))

  // for filter 
  let [filterCategory, setFilterCategory] = useState("all");

  let [brand, setBrand] = useState("all");
  // let [allSellerItems, setAllSellerItems] = useState((JSON.parse(localStorage.getItem("allSellerItems")) || new Array(16).fill({
  //   "name": "kjsajdflajsdla;kjdf",
  //   "description": "kljasdhflajsd",
  //   "address": "asfdasdfasdf",
  //   "price": 659087,
  //   "Img": "imgdata",
  //   "category": "Angles"
  //   })))
  let [isInputSearch, setIsInputSearch] = useState(false)
  // for shipping details
  let [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    secondName: "",
    address: "",
    state: "",
    zip: "",
    city: "",
  })
  let [paymentMethod, setPaymentMethod] = useState("")

  let value = {
    isAuth, setAuth,
    cart, setCart,
    userName, setUserName,
    userID, setUserID,
    walletBalance, setWalletBalance,
    isSeller, setIsSeller,
    userEmail, setUserEmail,
    userPassword, setUserPassword,
    total, setTotal,
    userAddress, setUserAddress,
    pendingItems, setPendingItems,
    allSellerItems, setAllSellerItems,
    isInputSearch, setIsInputSearch,
    filterCategory, setFilterCategory,
    brand, setBrand,
    userGender, setUserGender,
    userPhone, setUserPhone,
    userOrders, setUserOrders,
    shippingAddress, setShippingAddress,
    paymentMethod, setPaymentMethod,
    otp, setOTP,
    Alert, trigger,
    isAdmin,setIsAdmin,
    verificationItems, setVerificationItems
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
