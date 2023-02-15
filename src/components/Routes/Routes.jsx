import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import Login from "../Authorisation/Login";
import SignUp from "../Authorisation/SignUp";
import Cart from "../Cart/Cart";
import HomePage from "../Landing Page/HomePage";
import NewComings from "../Products Page/NewComings";
import SingleProductPage from "../Products Page/SingleProductPage";
import Wallet from "../User/Wallet/Wallet";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<HomePage /> />
    <Route path="/login" element=<Login /> />
    <Route path="/cart" element=<Cart /> />
    <Route path="/cart" element=<h1>Cart</h1> />
    <Route path="/signup" element=<SignUp /> />
    <Route path="/wallet" element=<Wallet /> />
    <Route path="/admin" element=<Admin /> />
    <Route path="/newarrivals" element=<NewComings/> />
    <Route path="/newarrivals/:id" element= <SingleProductPage /> />
</Routes>
}