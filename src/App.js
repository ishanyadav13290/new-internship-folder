
import axios from 'axios';
import { useContext, useEffect } from 'react';
import './App.css';
import { AuthContext } from './components/Context/Contexts';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/Routes/Routes';
import LoginAlertPopUp from './components/LoginAlertPopUp/LoginAlertPopUp';
function App() {
  let { isAdmin, setIsAdmin, trigger, Alert, isAuth, setAuth, setCart, setUserPhone, setUserName, userID, setUserID, setUserAddress, pendingItems, setPendingItems, setWalletBalance, setIsSeller, setUserEmail, setUserPassword, setUserOrders } = useContext(AuthContext)
  useEffect(() => {
    if (!isAuth || isAdmin) return;
    axios.get(`http://localhost:3001/users/${userID}`).then(res => {
      let element = res.data
      setCart(element.cart)
      setIsSeller(element.isSelling)
      setUserEmail(element.email)
      setUserPassword(element.password)
      setPendingItems(element.pendingItems)
      setUserPhone(element.phone)
      // setUserAddress(element.address)
      setUserOrders(element.orders)
    })
  }, [isAuth])
  useEffect(() => {
    if (!isAdmin) return
    (async () => {
      let temp = await axios.get(`http://localhost:3001/admins`)
      let element = temp.data;
      console.log(element)
      for (let i of element) {
        console.log(i)
        if (i._id == userID) {
          console.log( i)
          setUserID( i._id);
          setUserName( i.name);
          setUserEmail( i.email);
          return
        }
      }
    })()
  }, [isAdmin])
  return (
    <div className="App">
      <LoginAlertPopUp isAuth={isAuth} />
      <Alert />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
