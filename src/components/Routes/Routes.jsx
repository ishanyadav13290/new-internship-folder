import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import Login from "../Authorisation/Login";
import SignUp from "../Authorisation/SignUp";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import About from "../Gofra/About/about";
import Contact from "../Gofra/Contact/contact";
import HomeCare from "../Gofra/Others/Home&PersonalCare/home&care";
import Team from "../Gofra/Team/Team";
import HomePage from "../Landing Page/HomePage";
import Products from "../Products Page/products";
import SingleProductPage from "../Products Page/SingleProductPage";
import Settings from "../User/Settings/settings";
import Wallet from "../User/Wallet/Wallet";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<HomePage /> />
    <Route path="/login" element=<Login /> />
    <Route path="/cart" element=<Cart /> />
    <Route path="/admin" element=<Admin /> />
    <Route path="/checkout" element=<Checkout /> />
    <Route path="/signup" element=<SignUp /> />
    <Route path="/about" element=<About /> />
    <Route path="/team" element=<Team /> />
    <Route path="/contact" element=<Contact /> />
    <Route path="/ecom&retail" element=<HomeCare /> />
    <Route path="/account" element=<Settings /> />
    <Route path="/wallet" element=<Wallet /> />
    <Route path="/:category" element=<Products/> />
    <Route path="/search/:query" element=<Products/> />
    <Route path="/newarrivals/:id" element= <SingleProductPage /> />
</Routes>
}