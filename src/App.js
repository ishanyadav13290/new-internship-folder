
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/Routes/Routes';

function App() {
  return (
    <div className="App">
    <Navbar />
      <AllRoutes />
    <Footer />
    </div>
  );
}

export default App;
