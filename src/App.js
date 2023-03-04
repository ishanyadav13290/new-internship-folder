
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './components/Context/Contexts';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/Routes/Routes';

function App() {
  let {Alert} = useContext(AuthContext)
  return (
    <div className="App">
      <Alert/>
    <Navbar />
      <AllRoutes />
    <Footer />
    </div>
  );
}

export default App;
