import { Route, Routes } from "react-router-dom";
import SellerPanel from "../Seller/SellerPanel";
import Login from "../Authorisation/Login";
import SignUp from "../Authorisation/SignUp";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import About from "../Gofra/About/about";
import Contact from "../Gofra/Contact/contact";
import EcomRetail from "../Gofra/Others/Ecom&Retail/ecom&retail";
import HomeCare from "../Gofra/Others/Home&PersonalCare/HomeCare";
import SupplyChain from "../Gofra/Others/SupplyChainSolution/SupplyChain";
import HomePage from "../Landing Page/HomePage";
import Products from "../Products Page/products";
import SingleProductPage from "../Products Page/SingleProductPage";
import Settings from "../User/Settings/settings";
import AdminLogin from "../Authorisation/AdminLogin";
import Admin from "../Admins/Admin";
import Suppliers from "../Gofra/Others/Suppliers/suppliers";
import Buyers from "../Gofra/Others/Buyers/buyers";
import CreditApproval from "../Admins/Components/CreditApproval/CreditApproval";
import AllSellers from "../Admins/Components/AllSellers/allSellers";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<HomePage /> />
    <Route path="/login" element=<Login /> />
    <Route path="/cart" element=<Cart /> />
    <Route path="/sell" element=<SellerPanel /> />
    <Route path="/admins" element=<Admin /> />
    <Route path="/adminLogin" element=<AdminLogin /> />
    <Route path="/checkout" element=<Checkout /> />
    <Route path="/signup" element=<SignUp /> />
    <Route path="/about" element=<About /> />
    <Route path="/contact" element=<Contact /> />
    <Route path="/ecom&retail" element=<EcomRetail /> />
    <Route path="/home&care" element=<HomeCare /> />
    <Route path="/supplyChain" element=<SupplyChain /> />
    <Route path="/account" element=<Settings /> />
    <Route path="/suppliers" element=<Suppliers /> />
    <Route path="/buyers" element=<Buyers /> />
    <Route path="/creditApprove" element=<CreditApproval /> />
    <Route path="/allSellers" element=<AllSellers /> />
    <Route path="/:category" element=<Products/> />
    <Route path="/search/:query" element=<Products/> />
    <Route path="/newarrivals/:id" element= <SingleProductPage /> />
</Routes>
}